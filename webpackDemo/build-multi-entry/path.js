/*
 * @Author: YXS
 * @Date: 2020-11-16 11:08:40
 * @LastEditors: YXS
 * @LastEditTime: 2020-11-16 11:08:49
 * @Description: 常用文件夹路径
 */
const path = require('path')

const srcPath = path.join(__dirname, '..', 'src')
const distPath = path.join(__dirname, '..', 'dist')

module.exports = {
    srcPath,
    distPath
}