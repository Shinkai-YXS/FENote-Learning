/*
 * @Author: YXS
 * @Date: 2020-11-16 14:21:28
 * @LastEditors: YXS
 * @LastEditTime: 2020-11-16 14:22:40
 * @Description: 高级配置 —— 分离css —— 公共配置
 */
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { srcPath, distPath } = require('./paths')

module.exports = {
    entry: {
        index: path.join(srcPath, 'index.js'),
        other: path.join(srcPath, 'other.js')
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: ['babel-loader'],
                include: srcPath,
                exclude: /node_modules/
            }
            // css 处理
        ]
    },
    plugins: [
        // 针对每一个入口，都要新建一个 HtmlWebpackPlugin 的插件实例
        // 多入口 - 生成 index.html
        new HtmlWebpackPlugin({
            template: path.join(srcPath, 'index.html'),
            filename: 'index.html',
            // chunks 表示该页面要引用哪些 chunk （即上面的 index 和 other），默认全部引用
            chunks: ['index']  // 只引用 index.js
        }),
        // 多入口 - 生成 other.html
        new HtmlWebpackPlugin({
            template: path.join(srcPath, 'other.html'),
            filename: 'other.html',
            chunks: ['other']  // 只引用 other.js
        })

        // chunks 中的 index 和 other 对应 entry 的中的名字。
    ]
}

