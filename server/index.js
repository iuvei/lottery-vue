const express=require('express');
const bodyParser=require('body-parser');
const cookieParser = require('cookie-parser');
const path=require('path');
//const query=require('./db');
const app=express();
const filePath=path.join(__dirname+'/../dist/index.html');
app.use(express.static('dist'));
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());
app.use(cookieParser());
app.get('/',function(req,res){
    res.sendFile(filePath);
});
app.get('/getKJInfo',function(req,res){
    res.json({code:0,time:'09:43',qihao:5434563633,numList:[4,6,8,1,3]})
});
app.post('/postbankinfo',function(req,res){
    console.log(req.body);
    res.json({code:0,msg:'提交成功'});
})
app.get('/getCashOrder',function(req,res){
    res.json({code:0,num:4});
})
var server=app.listen(3000,function(){
    var host=server.address().address;
    var port=server.address().port;
    console.log('restart...');
});