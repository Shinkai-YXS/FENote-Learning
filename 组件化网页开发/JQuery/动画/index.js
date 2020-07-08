/*
 * @Author: YXS
 * @Date: 2020-07-01 10:39:43
 * @LastEditors: YXS
 * @LastEditTime: 2020-07-01 11:19:19
 * @Description: 
 */ 


$(document).ready(function () {

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

  // var swiper = function () {
  //   $("img").eq(index).css({ opacity: 1 }).siblings().css({ opacity: 0 });
  // };
  // var swiper = function () {
  //   $("img").eq(index).animate({ opacity: 1 }, 1000).siblings().animate({ opacity: 0 }, 1000);
  // };
  // var swiper = function () {
  //   $("img").eq(index).stop().animate({ opacity: 1 }, 1000).siblings().stop().animate({ opacity: 0 });
  // };
  // var swiper = function () {
  //   $('div').stop()
  //   .animate({
  //     'width': '0%'
  //   }, 1000)
  //   .delay(1000)
  //   .animate({'width': '100%'}, 1000)
  // };
  // var swiper = function () {
  //   $("img").eq(index).stop()
  //   .show(1000)
  //   .siblings().stop()
  //   .hide(1000);
  // };
  // var swiper = function() {
  //   $('div').stop().toggle('slow')
  // }
  var swiper = function () {
    $("img").eq(index).stop()
    .fadeIn('slow')
    .siblings().stop()
    .fadeOut('slow');
  };
  // var swiper = function() {
  //   $('div').stop().fadeToggle('slow')
  // }
  // var swiper = function () {
  //   $("img").eq(index).stop()
  //   .slideDown('slow')
  //   .siblings().stop()
  //   .slideUp('slow');
  // };
  var swiper = function() {
    $('div').stop().slideToggle('slow')
  }
});