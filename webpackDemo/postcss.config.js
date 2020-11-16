/*
 * @Author: YXS
 * @Date: 2020-11-13 15:43:15
 * @LastEditors: YXS
 * @LastEditTime: 2020-11-13 15:50:24
 * @Description: 
 */
module.exports = {
    // postcss 是一个比较大的集合，里面会有很多插件，而 autoprefixer 就是用来增加前缀的插件，而这个插件是需要安装的。
    // 例如我们写 transform: rotate(-45deg)
    // 当我们编译打包时，会首先检查 css 里有没有需要兼容的语句，如果有就加上相应的前缀
    // 所以编译打包之后就会有 -webkit-transform: rotate(-45deg)
    plugins: [require('autoprefixer')]
}