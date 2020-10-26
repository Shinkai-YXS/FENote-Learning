/*
 * @Author: YXS
 * @Date: 2020-10-19 16:19:22
 * @LastEditors: YXS
 * @LastEditTime: 2020-10-19 16:34:44
 * @Description: 打包时的配置文件
 */
// 引入 path，path 模块是寻找当前文件目录的
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
// module.exports 是 node.js 的语法规范
module.exports = {
    // mode 是模式
    mode: 'production',
    // __dirname 表示当前目录
    entry: path.join(__dirname, 'src', 'index.js'),
    output: {
        // 输出文件名，.[contenthash] 会根据代码的内容算出一个哈希值，如果代码变了，那么hash值会变，如果代码没有变，hash 值就不会变
        // 
        filename: 'bundle.[contenthash].js',
        // 输出目录
        path: path.join(__dirname, 'dist')
    },
    module: {
        // 规则
        rules: [
            {
                // 只要在 src 文件夹下检测到以 .js 结尾的文件，都要进行 babel-loader 转义
                test: /.js$/,
                loader: ['babel-loader'],
                include: path.join(__dirname, 'src'),
                exclude: /node-modules/
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            // 找到当前已有的模板
            template: path.join(__dirname, 'src', 'index.html'),
            // 根据当前模板产出的文件名
            filename: 'index.html'
        })
    ]
}