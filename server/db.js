const mysql=require('mysql');
const pool=mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '888',
    database: 'test'
})
module.exports=function (sql, values,fun) {
    pool.getConnection(function(err, connection) {
        if (err) {
            console.log("getConnectionError"+err.message)
            fun(err);
        } else {
            connection.query(sql, values, function(err, rows) {
                connection.release()
                if (err) {
                    console.log("QueryError"+err.message)
                    fun.call(this,err,rows);
                } else {
                    fun.call(this,err,rows);
                }
            })
        }
    })
}