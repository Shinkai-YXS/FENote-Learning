/*
 * @Author: YXS
 * @Date: 2020-07-06 15:04:25
 * @LastEditors: YXS
 * @LastEditTime: 2020-07-13 11:58:49
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

(function($) {
  $('.dropdown').dropdown({
    css3: true,
    delay: 200,
    animation: 'slideUpDown',
    event: 'click'
  })
  $('.dropdown').on('dropdown-show', function (e) {
    console.log("$('.dropdown').on('dropdown-show'")
    var $this = $(this),
        dataLoad = $this.data('load');
        console.log(dataLoad)
    if (!dataLoad) return;
    if (!$this.data('loaded')) {
      var $layer = $this.find('.dropdown-layer'),
          html = '';
      $.getJSON(dataLoad, function (data) {
        console.log(1);
        for (var i = 0; i < data.length; i++) {
          html += '<li><a href="' + data[i].url + '" target="_blank" class="menu-item">' + data[i].name + '</a></li>'
        }
        $layer.html(html);
        $this.data('loaded', true);
      });
    }
  });

})(jQuery)