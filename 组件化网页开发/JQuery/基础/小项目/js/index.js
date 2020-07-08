/*
 * @Author: YXS
 * @Date: 2020-06-22 15:28:32
 * @LastEditors: YXS
 * @LastEditTime: 2020-06-30 17:48:24
 * @Description:
 */

$(document).ready(function () {
  // $('a').hover(function() {
  //   console.log('hover')
  // })
  // $('a').mouseleave(function() {
  //   console.log('鼠标离开')
  // })
  // $('a').dblclick(function() {
  //   console.log('双击')
  // })
  // $('a').mousedown(function() {
  //   console.log('鼠标按下')
  // })
  // $('a').mouseup(function() {
  //   console.log('鼠标松开')
  // })
  // $('nav').mouseover(function(){
  //   console.log($(this))
  // })
  // $('nav').mouseout(function() {
  //   console.log($(this))
  // })
  // $('nav').mousemove(function() {
  //   console.log($(this))
  // })
  // $('div').scroll(function() {
  //   console.log($(this))
  // })
  $(window).resize(function () {});

  var index = 0;
  $('a').add(document).on({
    mouseenter: function () {
      index = $(this).index();
      swiper();
    },
    keydown: function (event) {
      if (event.keyCode == 37) {
        index = index > 0 ? --index : $("a").length - 1;
      } else if (event.keyCode == 39) {
        index = index < $("a").length - 1 ? ++index : 0
      } else {
        return true;
      }
      swiper();
    }
  })
  // $(document).keydown(function (event) {
  //   if (event.keyCode == 37) {
  //     if (index == 0) {
  //       index = $("a").length - 1;
  //     } else {
  //       index--;
  //     }
  //   } else if (event.keyCode == 39) {
  //     if (index == $("a").length - 1) {
  //       index = 0;
  //     } else {
  //       index++;
  //     }
  //   } else {
  //     return false;
  //   }
  //   swiper();
  // });
  // $("a").click(function () {
  //   index = $(this).index();
  //   swiper();
  // });
  // $("a").mouseenter(function () {
  //   index = $(this).index();
  //   swiper();
  // });
  var swiper = function () {
    $("img").eq(index).css({ opacity: 1 }).siblings().css({ opacity: 0 });
  };
});
