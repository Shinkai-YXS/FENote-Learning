/*
 * @Author: YXS
 * @Date: 2020-06-24 10:36:04
 * @LastEditors: YXS
 * @LastEditTime: 2020-06-24 11:39:56
 * @Description: 
 */ 
$(document).ready(function() {
  var js = $('aside').find('.javascript')
  console.log(js)
  var coffe = js.next()
  console.log(js)
  var ts = coffe.next()
  console.log(ts)
  var test = ts.prev()
  console.log(test)

  // js = js.parent()
  // console.log(js)
  // js = $('aside').children('details')
  // console.log(js)


  var lis = $('li')
  console.log(lis)
  console.log(lis.eq(8))

  var php = $('.php')
  console.log(php)
  lis = php.siblings()
  console.log(lis)
  

  var allLis = $('li')
  console.log(allLis)
  var python = allLis.filter('.python')
  console.log(python)
})