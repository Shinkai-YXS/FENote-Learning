/*
 * @Author: YXS
 * @Date: 2020-11-13 10:45:07
 * @LastEditors: YXS
 * @LastEditTime: 2020-11-16 17:15:41
 * @Description: 
 */
// 引入 css
import './style/style1.css'
import './style/style2.less'

import { sum } from './math'

const sumRes = sum(10, 20)
console.log('sumRes', sumRes)

console.log('window.ENV', ENV)
// 引入图片
function insertImgElem(imgFile) {
    const img = new Image()
    img.src = imgFile
    document.body.appendChild(img)
}
import imgFile1 from './img/1.png'
insertImgElem(imgFile1)
import imgFile2 from './img/2.jpeg'
insertImgElem(imgFile2)

// 引入动态数据 - 懒加载
setTimeout(() => {
    import('./dynamic-data.js').then(res => {
        console.log(res.default.message)
    })
}, 1500);
// // 增加，开启热更新之后的代码逻辑
// if (module.hot) {
//     module.hot.accept(['./math'], () => {
//         const sumRes = sum(10, 30)
//         console.log('sumRes in hot', sumRes)
//     })
// }
