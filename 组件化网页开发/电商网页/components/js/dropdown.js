/*
 * @Author: YXS
 * @Date: 2020-07-06 17:17:11
 * @LastEditors: YXS
 * @LastEditTime: 2020-07-10 17:11:57
 * @Description:
 */
// 模块
(function($) {
  'use strict';
  // 采用构造函数的方式封装 dropdown 组件
  function Dropdown($elem, options) {
    this.$elem = $elem
    this.$layer = this.$elem.find('.dropdown-layer')
    this.activeClass = options.active + '-active';
    this.options = options

    this.init()
  }

  Dropdown.DEFAULTS = {
    event: 'hover', // click
    css3: false,
    js: false,
    animation: 'fade',
    delay: 0,
    active: 'dropdown'
  }

  Dropdown.prototype.init = function() {
    var self = this

    this.$layer.showHide(this.options)
    this.$layer.on('show shown hide hidden', function(e) {
      self.$elem.trigger('dropdown-' + e.type)
    })

    if (this.options.event === 'click') {
      this.$elem.on('click', function(e) {
        self.show()
        e.stopPropagation() // 阻止冒泡
      })
      $(document).on('click', $.proxy(this.hide, this))
    } else {
      this.$elem.hover($.proxy(this.show, this), $.proxy(this.hide, this))
    }
  }

  Dropdown.prototype.show = function() {
    console.log('Dropdown.prototype.show')
    // 鼠标移入
    var self = this
    if (this.options.delay) {
      this.timer = setTimeout(function() {
        _show()
      }, this.options.delay)
    } else {
      _show()
    }
    function _show() {
      self.$elem.addClass(self.activeClass)
      self.$layer.showHide('show')
    }
  }

  Dropdown.prototype.hide = function() {
    console.log('Dropdown.prototype.hide')
    // 鼠标移出
    this.$elem.removeClass(this.activeClass)
    this.$layer.showHide('hide')
    if (this.options.delay) {
      clearTimeout(this.timer)
    }
  }

  // 插件形式
  $.fn.extend({
    dropdown: function(option) {
      return this.each(function() {
        var $this = $(this)
        // 将 option 覆盖 defaults 对象，若有相同参数则以 option 为准，若 option 为空，则 defaults 对象不改变
        var options = $.extend({}, Dropdown.DEFAULTS, $this.data(), typeof option === 'object' && option)
        // 实现单例模式，使 DropDown 只执行一次
        var dropdown = $this.data('dropdown')
        if (!dropdown) {
          $this.data('showHide', dropdown = new Dropdown($this, options));
        }
        if (typeof dropdown[option] === 'function') {
          dropdown[option]()
        }
      })
    }
  })
})(jQuery)
