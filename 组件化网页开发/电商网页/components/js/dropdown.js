/*
 * @Author: YXS
 * @Date: 2020-07-06 17:17:11
 * @LastEditors: YXS
 * @LastEditTime: 2020-07-06 17:20:00
 * @Description:
 */
// 模块
(function($) {
  'use strict';
  function dropdown(elem) {
    var $elem = $(elem),
        activeClass = $elem.data('active') + '-active';
    $elem.hover(function() {
      // 鼠标移入
      $elem.addClass(activeClass)
    }, function() {
      // 鼠标移出
      $elem.removeClass(activeClass)
    })
  }

  // 插件形式
  $.fn.extend({
    dropdown: function() {
      return this.each(function() {
        dropdown(this)
      })
    }
  })
})(jQuery)
