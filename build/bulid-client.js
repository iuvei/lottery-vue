const webpack=require('webpack');
const path=require('path');
const htmlWebpackPlugin=require('html-webpack-plugin');
//const { VueLoaderPlugin } = require('vue-loader')
module.exports={
    mode: 'development',
    entry:path.resolve(__dirname,'../src/main.js'),
    output:{path:path.resolve(__dirname,'../dist'),filename:'index.js?[hash:8]'},
    module:{
        rules:[
            {test:/\.vue$/,loader:'vue-loader'},
            {test:/\.js$/, exclude: /node_modules/,loader:'babel-loader'},
            {test:/\.(png|svg|gif|jpg)$/,
				use:[{loader:'file-loader',query:{name:'[path][name].[ext]?[hash:8]'}}]
            },
            {
                test: /\.css$/,
                use: [
                    'vue-style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.sass$/,
                use: [
                    'vue-style-loader',
                    'css-loader',
                    {
                        loader: 'sass-loader',
                        options: {
                            indentedSyntax: true
                        }
                    }
                ]
            }
        ]
    },
    resolve:{
        alias:{
            'vue':'vue/dist/vue.js'
        },
        extensions:['.js','.css','.vue']/*自动补全后缀*/
    },
    plugins:[
        //new VueLoaderPlugin(),
        new htmlWebpackPlugin(
            {
                template: path.join(__dirname, './default.html'),
                filename: 'index.html'
            }
        )
    ]
}