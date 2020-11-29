/*
 * @Author: YXS
 * @Date: 2020-11-23 14:20:56
 * @LastEditors: YXS
 * @LastEditTime: 2020-11-23 14:21:11
 * @Description: 公共目录
 */
const path = require('path')

const srcPath = path.join(__dirname, '..', 'src')
const distPath = path.join(__dirname, '..', 'dist')

module.exports = {
    srcPath,
    distPath
}
