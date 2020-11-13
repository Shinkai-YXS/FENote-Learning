/*
 * @Author: YXS
 * @Date: 2020-11-13 11:16:23
 * @LastEditors: YXS
 * @LastEditTime: 2020-11-13 11:17:11
 * @Description: 常用文件夹路径
 */
const path = require('path')

const srcPath = path.join(__dirname, '..', 'src')
const distPath = path.join(__dirname, '..', 'dist')

module.exports = {
    srcPath,
    distPath
}