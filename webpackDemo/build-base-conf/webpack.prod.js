/*
 * @Author: YXS
 * @Date: 2020-11-13 11:08:26
 * @LastEditors: YXS
 * @LastEditTime: 2020-11-16 10:57:19
 * @Description: 生产环境相关配置
 */
const path = require('path')
const webpack = require('webpack')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const webpackCommonConf = require('./webpack.common.js')
const { merge } = require('webpack-merge')
const { srcPath, distPath } = require('./paths')

module.exports = merge(webpackCommonConf, {
    mode: 'production',
    output: {
         // 打包代码时，加上 hash 戳，contentHash 就是针对内容去算 hash 值，如果内容变了，hash 值就变，如果内容不变，hash 值就不变。
        //  这样做的好处就是，每次打包完成去刷新页面时，每次访问 html 时，都会访问 bundle.[contentHash:8].js，
        // 如果说打包的时候 js 内容变了，那么 contentHash 值也会变，缓存就会失效，就会访问新的文件
        // 如果我们在打包的时候 js 内容没变，那么 contentHash 的值也不会变，我们在请求的时候就会走缓存。
        filename: 'bundle.[contentHash:8].js',
        path: distPath,
        // publicPath: 'http://cdn.abc.com'  // 修改所有静态文件 url 的前缀（如 cdn 域名），这里暂时用不到
    },
    module: {
        rules: [
            // 图片 - 考虑 base64 编码的情况
            {
                test: /\.(png|jpg|jpeg|gif)$/,
                use: {
                    loader: 'url-loader',
                    options: {
                        // 小于 5kb 的图片用 base64 格式产出
                        // 否则，依然延用 file-loader 的形式，产出 url 格式
                        limit: 5 * 1024,

                        // 打包到 img 目录下
                        outputPath: '/img1/',

                        // 设置图片的 cdn 地址（也可以统一在外面的 output 中设置，那将作用于所有静态资源）
                        // publicPath: 'http://cdn.abc.com'
                    }
                }
            },
        ]
    },
    plugins: [
        new CleanWebpackPlugin(), // 会默认清空 output.path 文件夹
        new webpack.DefinePlugin({
            // window.ENV = 'production'
            ENV: JSON.stringify('production')
        })
    ]
})