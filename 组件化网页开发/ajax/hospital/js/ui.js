/*
 * @Author: YXS
 * @Date: 2020-07-03 16:15:00
 * @LastEditors: YXS
 * @LastEditTime: 2020-07-06 14:53:26
 * @Description:
 */
// ui-search 定义

$.fn.UiSearch = function() {
  var ui = $(this)
  console.log(ui)
  // 在当前 ui 内查找 ui-search-selected 元素，并添加点击事件
  $('.ui-search-selected', ui).on('click', function() {
    $('.ui-search-select-list').show()
    // 这里 return false 表示不需要事件传递，也就是阻止冒泡
    return false
  })
  $('.ui-search-select-list a', ui).on('click', function() {
    $('.ui-search-selected').text($(this).text())
    $('.ui-search-select-list').hide()
    return false
  })
  $('body').on('click', function() {
    $('.ui-search-select-list').hide()
    return false
  })
}
/**
 * ui-tab 定规
 * @param {string} header Tab 组件的所有选项卡 .item
 * @param {string} content Tab 组件的内容区域 的所有 .item
 * @param {string} focus_prefix 选项卡高亮样式前缀，可选
 */
$.fn.UiTab = function(header, content, focus_prefix) {
  var ui = $(this)
  var tabs = $(header, ui)
  var cons = $(content, ui)
  var focus_prefix = focus_prefix || ''
  tabs.on('click', function() {
    var index = $(this).index()
    tabs.removeClass(focus_prefix + 'item_focus').eq(index).addClass(focus_prefix + 'item_focus')
    cons.hide().eq(index).show()
    return false
  })
}

// ui-backTop
$.fn.UiBackTop = function() {
  var ui = $(this)
  var el = $('<a class="ui-backTop" href="0">')
  ui.append(el)
  var windowHeight = $(window).height()
  console.log(windowHeight)
  $(window).on('scroll', function() {
    var top = $(window).scrollTop()
    if (top > windowHeight) {
      el.show()
    } else {
      el.hide()
    }
    console.log(top)
  })
  el.on('click', function() {
    $(window).scrollTop(0)
  })
}

// ui-slider
/**
 * 1. 左右箭头需要能控制翻译
 * 2. 翻页的时候，进度点要联动
 * 3. 翻到第三页的时候，下一页需要回到第一页，翻到第一页的时候同理
 * 4. 进度点在点击的时候，需要切换到对应的页面
 * 5. 没有进度点点击和翻页操作时，需要进行自动滚动
 * 6. 滚动过程中，屏蔽其他操作（自动滚滚动，左右翻页，进度点点击）
 * 7. 高级无缝滚动
 */
$.fn.UiSlider = function() {
  var ui = $(this)
  var wrap = $('.ui-slider-wrap')
  // 上一个按钮
  var btn_prev = $('.ui-slider-arrow .left', ui)
  // 下一个按钮
  var btn_next = $('.ui-slider-arrow .right', ui)
   // 
  var items = $('.ui-slider-wrap .item', ui)
  // 
  var tips = $('.ui-slider-process .item', ui)

  // 第几个图片
  var current = 0
  // 一共有几个图片
  var size = items.size()
  // 每个图片的宽度
  var width = items.eq(0).width()
  var enableAuto = true
  // 设置自动滚动感应（如果鼠标在 wrap 中，不要自动滚动）
  ui.on('mouseover', function() {
    enableAuto = false
  }).on('mouseout', function() {
    setTimeout(() => {
      enableAuto = true
    }, 2000);
  })
  // 具体操作
  wrap
  .on('move_prev', function() {
    if (current <= 0) {
      current = size
    }
    current = current - 1
    wrap.triggerHandler('move_to', current)
  })
  .on('move_next', function() {
    current = current + 1
    if (current >= size) {
      current = 0
    }
    wrap.triggerHandler('move_to', current)
  })
  .on('move_to', function(event, index) {
    wrap.css('left', index * width * -1)
    tips.removeClass('item_focus').eq(index).addClass('item_focus')
  })
  .on('auto_move', function() {
    setInterval(function() {
      enableAuto && wrap.triggerHandler('move_next')
    }, 2000)
  })
  .triggerHandler('auto_move')
  // 事件操作
  btn_prev.on('click', function() {
    wrap.triggerHandler('move_prev')
  })
  btn_next.on('click', function() {
    wrap.triggerHandler('move_next')
  })
  tips.on('click', function() {
    wrap.triggerHandler('move_to', $(this).index())
  })

}

// 快速预约选择医院及科室
$.fn.UiCascading = function() {
  var ui = $(this)
  var selects = $('select', ui)
  selects.on('change', function() {
    var val = $(this).val()
    var index = selects.index(this)

    //	触发下一个 select 的更新，根据当前的值
    var where = $(this).attr('data-where')
    where = where ? where.split(',') : [];
		where.push(val);

    selects.eq(index + 1).attr('data-where', where.join(','))
                         .triggerHandler('reloadOptions')
    //	触发下一个之后的 select  的初始化（清除不应该的数据项）
		ui.find('select:gt('+ (index+1) +')').each(function(){
			$(this)
			.attr('data-where','')
			.triggerHandler('reloadOptions');
		})
  })
  .on('reloadOptions',function(){
    var method = $(this).attr('data-search')
    var args = $(this).attr('data-where').split(',')
    var data = AjaxRemoteGetData[method].apply(this, args)
    var select = $(this)
    select.find('option').remove()
    $.each(data, function(i, item) {
      var el = $('<option value='+item+'>'+item+'</option>')
      select.append(el)
    })
  })
  selects.eq(0).triggerHandler('reloadOptions');
}
// 页面的脚本逻辑
$(function() {
  // 页面完全加载完成之后执行代码
  $('.ui-search').UiSearch()
  $('.content_tab').UiTab('.caption > .item', '.block > .item')
  $('.content_tab > .block > .item').UiTab('.block-caption > a','.block-content > .block-wrap', 'block-caption-')
  $('body').UiBackTop()
  $('.ui-slider').UiSlider()
  $('.ui-cascading').UiCascading()
})