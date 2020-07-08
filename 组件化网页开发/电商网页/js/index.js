/*
 * @Author: YXS
 * @Date: 2020-07-06 15:04:25
 * @LastEditors: YXS
 * @LastEditTime: 2020-07-06 17:31:29
 * @Description:
 */

// $('.dropdown').hover(function() {
  // 鼠标移入
  // $(this).addClass('dropdown-active')

  // var $dropdown = $(this)
  // $dropdown.find('.dropdown-toggle').css({
  //   'background-color': '#fff',
  //   'border-color': '#cdd0d4'
  // })
  // $dropdown.find('.dropdown-arrow').css({
  //   'background-image': 'url(img/dropdown-arrow-active.png)'
  // })
  // $dropdown.find('.dropdown-layer').show()
// }, function() {
  // 鼠标移出
  // $(this).removeClass('dropdown-active')

  // var $dropdown = $(this)
  // $dropdown.find('.dropdown-toggle').css({
  //   'background-color': '',
  //   'border-color': '#f3f5f7'
  // })
  // $dropdown.find('.dropdown-arrow').css({
  //   'background-image': 'url(img/dropdown-arrow.png)'
  // })
  // $dropdown.find('.dropdown-layer').hide()
// })
$('.dropdown').dropdown()