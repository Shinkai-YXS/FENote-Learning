/*
 * @Author: YXS
 * @Date: 2020-07-16 11:26:59
 * @LastEditors: YXS
 * @LastEditTime: 2020-07-16 17:16:10
 * @Description: 自定义音频播放器的js文件
 */


/**
 * @Author: YXS
 * @Description: 获取 node 节点及声明全局变量
 */

// 播放/暂停按钮
var PlayNode = document.querySelector('.playNode'),
    // 播放暂停的布尔值
    playing = true,
    // 静音/声音 按钮
    VolumeNode = document.querySelector('.volumeNode'),
    // 是否静音的布尔值
    volumeing = true,
    // progress 进度条
    Progress = document.querySelector('.progress'),
    // 进度条外层
    ProgressNode = document.querySelector('.progressNode'),
    // 进度条外层的外层
    LineNode = document.querySelector('.lineNode'),
    // 所有的数据存在数组里
    allMusic = [
      {'src': './music/mus/AcousticGuitar1.mp3', 'img': './music/pic/fmt01.jpg'},
      {'src': './music/mus/AmazingGrace.mp3', 'img': './music/pic/fmt02.png'},
      {'src': './music/mus/FeelsGood2B.mp3', 'img': './music/pic/fmt03.jpg'},
      {'src': './music/mus/FunBusyIntro.mp3', 'img': './music/pic/fmt04.jpg'},
      {'src': './music/mus/GreenDaze.mp3', 'img': './music/pic/fmt05.jpg'},
      {'src': './music/mus/Limosine.mp3', 'img': './music/pic/fmt06.jpg'},
    ],
    // 第几首歌
    musicIndex = 0,
    // 歌曲封面节点
    TopNode = document.querySelector('.topNode'),
    // 下一首歌
    NextNode = document.querySelector('.nextNode'),
    // 上一首歌
    LastNode = document.querySelector('.lastNode');
// 创建 audio
var myAudio = new Audio()
// 给 audio 对象一个 src
myAudio.src = allMusic[musicIndex].src

TopNode.style.backgroundImage = 'url(' + allMusic[musicIndex].img + ')'
console.log(myAudio.src)

// 谷歌浏览器不允许直接 play
// myAudio.play()

/**
 * @Author: YXS
 * @Description: 播放/暂停
 */
PlayNode.onclick = function() {
  playing = !playing
  playing ? myAudio.play() : myAudio.pause()
}

/**
 * @Author: YXS
 * @Description: 静音 / 非静音
 */
VolumeNode.onclick = function() {
  volumeing = !volumeing
  myAudio.volume = volumeing ? 1 : 0
  if (volumeing) {
    this.className = 'volumeNode'
  } else {
    this.className = 'noVolumeNode'
  }
}

/**
 * @Author: YXS
 * @Description: 播放时，进度条的长度控制计算
 */
myAudio.addEventListener('timeupdate', function() {
  Progress.style.width = (myAudio.currentTime / myAudio.duration * 100) - 1 + '%'
})

/**
 * @Author: YXS
 * @Description: 点击进度条让进度条直接到达点击位置
 */
ProgressNode.onclick = function(e) {
  var ev = e || event
  Progress.style.width = (ev.offsetX < 5 ? ProgressNode.offsetWidth - 4 : ev.offsetX) - 2 + 'px'
  myAudio.currentTime = myAudio.duration * (Progress.offsetWidth / ProgressNode.offsetWidth)
  playing ? myAudio.pause() : myAudio.play()
}

/**
 * @Author: YXS
 * @Description: 下一首歌事件
 */
NextNode.onclick = function() {
  musicIndex++
  if (musicIndex >= allMusic.length) musicIndex = 0
  changeMusic()
}

/**
 * @Author: YXS
 * @Description: 上一首歌事件
 */
LastNode.onclick = function() {
  musicIndex--
  if (musicIndex < 0) musicIndex = 6
  changeMusic()
}

/**
 * @Author: YXS
 * @Description: 改变播放源与封面图
 */
function changeMusic() {
  Progress.style.width = '0px'
  myAudio.src = allMusic[musicIndex].src
  TopNode.style.backgroundImage = 'url(' + allMusic[musicIndex].img + ')'
  console.log(TopNode.style)
  playing = !playing 
  myAudio.play()
}
