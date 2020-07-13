/*
 * @Author: YXS
 * @Date: 2020-07-08 11:28:27
 * @LastEditors: YXS
 * @LastEditTime: 2020-07-08 11:36:12
 * @Description: transition 兼容性
 */
(function() {
  var transitionEndEventName = {
    transition: 'transitionend',
    MozTransition: 'transitionend',
    WebkitTransition: 'webkitTransitionEnd ',
    OTransition: 'OTransitionEnd otransitionend'
  }
  var transitionEnd = '', // 最终获得的 transitionend 字符串
      isSupport = false // 是否支持 transition
  for (var name in transitionEndEventName) {
    if (document.body.style[name] !== undefined) {
      transitionEnd = transitionEndEventName[name]
      isSupport = true
      break
    }
  }
  window.mt = window.mt || {}
  window.mt.transition = {
    end: transitionEnd,
    isSupport: isSupport
  }
})()

// 兼容浏览器
// 判断浏览器是否支持 transition 过渡