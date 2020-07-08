/*
 * @Author: YXS
 * @Date: 2020-07-07 13:50:13
 * @LastEditors: YXS
 * @LastEditTime: 2020-07-08 11:17:39
 * @Description:
 */
function init($elem, hiddenCallback) {
  if ($elem.is(':hidden')) {
    $elem.data('status', 'hidden')
    if (typeof hiddenCallback === 'function') hiddenCallback()
  } else {
    $elem.data('status', 'shown')
  }
}
function show($elem, callback) {
  if ($elem.data('status') === 'show') return
  if ($elem.data('status') === 'shown') return
  // 发布订阅消息
  $elem.data('status', 'show').trigger('show')
  callback && callback()
}
function hide($elem, callback) {
  if ($elem.data('status') === 'hide') return
  if ($elem.data('status') === 'hidden') return
  $elem.data('status', 'hide').trigger('hide')
  callback && callback()
}
var slient = {
  init: init,
  show: function($elem) {
    show($elem, function() {
      $elem.show()
      $elem.data('status', 'shown').trigger('shown')
    })
  },
  hide: function($elem) {
    hide($elem, function() {
      $elem.hide()
      $elem.data('status', 'hidden').trigger('hidden')
    })
  }
}
var css3 = {
  fade: {
    init: function($elem) {
      $elem.addClass('transition')
      init($elem, function() {
        $elem.addClass('fadeOut')
      })
    },
    show: function($elem) {
      show($elem, function() {
        $elem.off('transitionend').one('transitionend', function() {
          $elem.data('status', 'shown').trigger('shown')
        })
        $elem.show()
        setTimeout(() => {
          $elem.removeClass('fadeOut')
        }, 20);
      })
    },
    hide: function($elem) {
      hide($elem, function() {
        // trasitionend 表示动画结束之后
        $elem.off('transitionend').one('transitionend', function() {
          $elem.hide()
          $elem.data('status', 'hidden').trigger('hidden')
        })
        $elem.addClass('fadeOut')
      })
    }
  },
  slideUpDown: {
    show: function() {

    },
    hide: function() {
  
    }
  },
}