/*
 * @Author: YXS
 * @Date: 2020-07-07 13:50:13
 * @LastEditors: YXS
 * @LastEditTime: 2020-07-13 11:52:44
 * @Description:
 */
(function ($) {
  var transition = window.mt.transition;
  function init($elem, hiddenCallback) {
    if ($elem.is(":hidden")) {
      $elem.data("status", "hidden");
      if (typeof hiddenCallback === "function") hiddenCallback();
    } else {
      $elem.data("status", "shown");
    }
  }
  function show($elem, callback) {
    if ($elem.data("status") === "show") return;
    if ($elem.data("status") === "shown") return;
    // 发布订阅消息
    $elem.data("status", "show").trigger("show");
    callback && callback();
  }
  function hide($elem, callback) {
    if ($elem.data("status") === "hide") return;
    if ($elem.data("status") === "hidden") return;
    $elem.data("status", "hide").trigger("hide");
    callback && callback();
  }
  /**
   * @Author: YXS
   * @Description: 没有动画
   */
  var slient = {
    init: init,
    show: function ($elem) {
      show($elem, function () {
        $elem.show();
        $elem.data("status", "shown").trigger("shown");
      });
    },
    hide: function ($elem) {
      hide($elem, function () {
        $elem.hide();
        $elem.data("status", "hidden").trigger("hidden");
      });
    },
  };
  /**
   * @Author: YXS
   * @Description: css3 动画
   */
  var css3 = {
    _init: function ($elem, className) {
      $elem.addClass("transition");
      init($elem, function () {
        $elem.addClass(className);
      });
    },
    _show: function ($elem, className) {
      show($elem, function () {
        $elem.off(transition.end).one(transition.end, function () {
          $elem.data("status", "shown").trigger("shown");
          console.log($elem.height())
        });
        $elem.show();
        setTimeout(() => {
          $elem.removeClass(className);
        }, 20);
      });
    },
    _hide: function ($elem, className) {
      hide($elem, function () {
        // trasitionend 表示动画结束之后
        $elem.off(transition.end).one(transition.end, function () {
          $elem.hide();
          $elem.data("status", "hidden").trigger("hidden");
        });
        $elem.addClass(className);
      });
    },
    fade: {
      init: function ($elem) {
        css3._init($elem, "fadeOut");
      },
      show: function ($elem) {
        css3._show($elem, "fadeOut");
      },
      hide: function ($elem) {
        css3._hide($elem, "fadeOut");
      },
    },
    slideUpDown: {
      init: function ($elem) {
        // 获取高度并设置高度
        $elem.height($elem.height());
        css3._init($elem, "slideUpDownCollapse");
      },
      show: function ($elem) {
        css3._show($elem, "slideUpDownCollapse");
      },
      hide: function ($elem) {
        css3._hide($elem, "slideUpDownCollapse");
      },
    },
    slideLeftRight: {
      init: function ($elem) {
        // 获取宽度并设置宽度
        $elem.width($elem.width());
        css3._init($elem, "slideLeftRightCollapse");
      },
      show: function ($elem) {
        css3._show($elem, "slideLeftRightCollapse");
      },
      hide: function ($elem) {
        css3._hide($elem, "slideLeftRightCollapse");
      },
    },
    fadeSlideUpDown: {
      init: function ($elem) {
        // 获取宽度并设置宽度
        $elem.height($elem.height());
        css3._init($elem, "fadeOut slideUpDownCollapse");
      },
      show: function ($elem) {
        css3._show($elem, "fadeOut slideUpDownCollapse");
      },
      hide: function ($elem) {
        css3._hide($elem, "fadeOut slideUpDownCollapse");
      },
    },
    fadeSlideLeftRight: {
      init: function ($elem) {
        // 获取宽度并设置宽度
        $elem.width($elem.width());
        css3._init($elem, "fadeOut slideLeftRightCollapse");
      },
      show: function ($elem) {
        css3._show($elem, "fadeOut slideLeftRightCollapse");
      },
      hide: function ($elem) {
        css3._hide($elem, "fadeOut slideLeftRightCollapse");
      },
    },
  };
  /**
   * @Author: YXS
   * @Description: JS 动画
   */
  var js = {
    _init: function ($elem, callback) {
      $elem.removeClass("transition");
      init($elem);
      callback && callback();
    },
    _show: function ($elem, mode) {
      show($elem, function () {
        $elem.stop()[mode](function () {
          // 本回调表示动画执行完了之后
          $elem.data("status", "shown").trigger("shown");
        });
      });
    },
    _hide: function ($elem, mode) {
      hide($elem, function () {
        $elem.stop()[mode](function () {
          $elem.data("status", "hidden").trigger("hidden");
        });
      });
    },
    _customInit: function ($elem, options) {
      var styles = {};
      for (var p in options) {
        styles[p] = $elem.css(p);
      }
      $elem.data("styles", styles);

      js._init($elem, function () {
        $elem.css(options);
      });
    },
    _customShow: function ($elem) {
      show($elem, function () {
        $elem.show();
        $elem.stop().animate($elem.data("styles"), function () {
          // 动画结束回调
          $elem.data("status", "shown").trigger("shown");
        });
      });
    },
    _customHide: function ($elem, options) {
      hide($elem, function () {
        $elem.stop().animate(options, function () {
          // 动画结束回调
          $elem.hide();
          $elem.data("status", "hidden").trigger("hidden");
        });
      });
    },
    fade: {
      init: function ($elem) {
        js._init($elem);
      },
      show: function ($elem) {
        js._show($elem, "fadeIn");
      },
      hide: function ($elem) {
        js._hide($elem, "fadeOut");
      },
    },
    slideUpDown: {
      init: function ($elem) {
        js._init($elem);
      },
      show: function ($elem) {
        js._show($elem, "slideDown");
      },
      hide: function ($elem) {
        js._hide($elem, "slideUp");
      },
    },
    slideLeftRight: {
      init: function ($elem) {
        js._customInit($elem, {
          width: 0,
          "padding-left": 0,
          "padding-right": 0,
        });
      },
      show: function ($elem) {
        js._customShow($elem);
      },
      hide: function ($elem) {
        js._customHide($elem, {
          width: 0,
          "padding-left": 0,
          "padding-right": 0,
        });
      },
    },
    fadeSlideUpDown: {
      init: function ($elem) {
        js._customInit($elem, {
          opacity: 0,
          height: 0,
          "padding-top": 0,
          "padding-bottom": 0,
        });
      },
      show: function ($elem) {
        js._customShow($elem);
      },
      hide: function ($elem) {
        js._customHide($elem, {
          opacity: 0,
          height: 0,
          "padding-top": 0,
          "padding-bottom": 0,
        });
      },
    },
    fadeSlideLeftRight: {
      init: function ($elem) {
        js._customInit($elem, {
          opacity: 0,
          width: 0,
          "padding-left": 0,
          "padding-right": 0,
        });
      },
      show: function ($elem) {
        js._customShow($elem);
      },
      hide: function ($elem) {
        js._customHide($elem, {
          opacity: 0,
          width: 0,
          "padding-left": 0,
          "padding-right": 0,
        });
      },
    },
  };
  var defaults = {
    css3: false,
    js: false,
    animation: 'fade'
  }
  function showHide($elem, options) {
    var mode = null
    // 将外部传来的参数覆盖 defaults 的属性
    // options = $.extend({}, defaults, options)
    if (options.css3 && transition.isSupport) {
      // css3 动画
      mode = css3[options.animation] || css3[defaults.animation]
    } else if (options.js) {
      // js 动画
      mode = js[options.animation] || js[defaults.animation]
    } else {
      // 没有动画
      mode = slient
    }
    // console.log(mode)
    mode.init($elem)
    return {
      // $.proxy 改变函数指向并传参，第一个参数传函数本身，第二个参数调用函数者，第三个参数传参数
      show: $.proxy(mode.show, this, $elem),
      hide: $.proxy(mode.hide, this, $elem)
    }
  }
  // 插件
  $.fn.extend({
    showHide: function (option) {
      // console.log('-----')
      return this.each(function () {
        var $this = $(this),
          options = $.extend({}, defaults, typeof option === 'object' && option),
          mode = $this.data('showHide');

        if (!mode) {
          $this.data('showHide', mode = showHide($this, options));
        }

        if (typeof mode[option] === 'function') {
          mode[option]();
        }
      });
    }
  });
})(jQuery);