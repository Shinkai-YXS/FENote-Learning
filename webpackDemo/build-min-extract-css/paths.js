/*
 * @Author: YXS
 * @Date: 2020-11-16 14:08:04
 * @LastEditors: YXS
 * @LastEditTime: 2020-11-16 14:08:24
 * @Description: 公共路径
 */
const path = require('path')

const srcPath = path.join(__dirname, '..', 'src')
const distPath = path.join(__dirname, '..', 'dist')

module.exports = {
    srcPath,
    distPath
}