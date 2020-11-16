/*
 * @Author: YXS
 * @Date: 2020-11-16 16:12:48
 * @LastEditors: YXS
 * @LastEditTime: 2020-11-16 16:12:58
 * @Description: 公共路径
 */
const path = require('path')

const srcPath = path.join(__dirname, '..', 'src')
const distPath = path.join(__dirname, '..', 'dist')

module.exports = {
    srcPath,
    distPath
}