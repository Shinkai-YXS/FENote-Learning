/*
 * @Author: YXS
 * @Date: 2020-11-19 17:05:20
 * @LastEditors: YXS
 * @LastEditTime: 2020-11-19 17:05:29
 * @Description: 常用文件夹路径
 */
const path = require('path')

const srcPath = path.join(__dirname, '..', 'src')
const distPath = path.join(__dirname, '..', 'dist')

module.exports = {
    srcPath,
    distPath
}
