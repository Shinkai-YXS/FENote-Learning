/*
 * @Author: YXS
 * @Date: 2020-07-02 15:12:05
 * @LastEditors: YXS
 * @LastEditTime: 2020-07-02 16:59:07
 * @Description: 手写 ajax
 */
var $ = {
  ajax: function(options) {
    var xhr = null, // XMLHttpRequest 对象
        url = options.url, // URl 地址
        method = options.method || 'GET', // 传输方式，默认为 get
        async = typeof(options.async) == "undefined" ? true : options.async,
        data = options.data || null,
        success = options.success, // ajax 请求成功的回调函数
        fail = options.fail, // 请求失败回调函数 
        params = ''; // 参数字符串
    // 将 data 的对象字面量的形式转换为字符串形式
    if (data) {
      for(var i in data) {
        params += i + '=' + data[i] + '&'
      }
      // 去掉最后一个 &
      params = params.replace(/&$/,"")
    }
    // 根据 method 的值改变 url
    if(method.toLocaleUpperCase() === 'GET') {
      url += '?' + params
      params = ''
    }
    /**
     * 创建 XMLHttpRequest 对象
     */
    if (typeof XMLHttpRequest != 'undefined') {
      // 判断浏览器是否将 XMLHttpRequest 作为本地对象实现，针对 IE7，Firefox，Opera 等
      xhr = new XMLHttpRequest()
    } else if (typeof ActiveXObject != 'undefinec') {
      // 将所有可能出现的 ActiveXObject 版本放在一个数组中
      var xhrArr = ["Microsoft.XMLHTTP",
                    'MSXML2.XMLHTTP.6.0',
                    'MSXML2.XMLHTTP.5.0',
                    'MSXML2.XMLHTTP.4.0',
                    'MSXML2.XMLHTTP.3.0',
                    'MSXML2.XMLHTTP.2.0']
      // 遍历创建 XMLHttpRequest 对象
      var len = xhrArr.length;
      for(var i = 0; i < len; i++) {
        try {
          // 创建 ActiveXObject 对象
          xhr = new ActiveXObject(xhrArr[i])
          break;
        } catch (ex) {}
      }
    } else {
      throw new Error('No XHR object availabel.')
    }
    /**
     * 创建请求
     */
    xhr.open(method, url, async)
    /**
     * 设置请求头
     */
    xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded")
    /**
     * 发送请求
     */
    console.log(params)
    xhr.send(params)

    xhr.onreadystatechange = function() {
      console.log(xhr)
      if (xhr.readyState === 4) {
        if ((xhr.status >= 200 && xhr.status < 300) || xhr.status == 304) {
          success && success(JSON.parse(xhr.responseText))
        } else {
          fail && fail()
        }
      }
    }
  },
  jsonp: function() {
  }
}