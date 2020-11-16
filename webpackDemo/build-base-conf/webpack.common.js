/*
 * @Author: YXS
 * @Date: 2020-11-13 11:08:08
 * @LastEditors: YXS
 * @LastEditTime: 2020-11-13 15:27:38
 * @Description: 公共配置
 */
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { srcPath, distPath } = require('./paths')

module.exports = {
    entry: path.join(srcPath, 'index'),
    module: {
        rules: [
            {
                test: /\.js$/,
                // 用 babel-loader 转换 JavaScript 文件
                loader: ['babel-loader'],
                // 只命中src目录里的js文件，加快 Webpack 搜索速度
                include: srcPath,
                // 排除 node_modules 目录下的文件
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                // loader 的执行顺序是：从后往前
                loader: ['style-loader', 'css-loader', 'postcss-loader'] // 加了 postcss
            },
            {
                test: /\.less$/,
                // 增加 'less-loader' ，注意顺序
                loader: ['style-loader', 'css-loader', 'less-loader']
            }
        ]
    },
    // plugins 是 webpack 的插件，目的在于解决 loader 无法实现的其他事。
    plugins: [
        new HtmlWebpackPlugin({
            template: path.join(srcPath, 'index.html'),
            filename: 'index.html'
        })
    ]
}
