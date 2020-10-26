/*
 * @Author: YXS
 * @Date: 2020-10-19 11:35:30
 * @LastEditors: YXS
 * @LastEditTime: 2020-10-19 15:52:54
 * @Description: 开发环境配置文件
 */
// 引入 path，path 模块是寻找当前文件目录的
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
// module.exports 是 node.js 的语法规范
module.exports = {
    // mode 是模式
    mode: 'development',
    // __dirname 表示当前目录
    entry: path.join(__dirname, 'src', 'index.js'),
    output: {
        // 输出文件名
        filename: 'bundle.js',
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
    ],
    // 本地服务
    devServer: {
        // 端口
        port: 3000,
        // 当前目录
        contentBase: path.join(__dirname, 'dist')
    }
}