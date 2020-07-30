/*
 * @Author: YXS
 * @Date: 2020-07-29 17:21:08
 * @LastEditors: YXS
 * @LastEditTime: 2020-07-30 16:01:29
 * @Description:实现画圆和划线
 *
 * 1、添加事件touchstart、touchmove、touchend
 * 2、touchstart判断是否点击的位置处于圆内getPosition，处于则初始化
 * lastpoint、restPoint
 * 3、touchmove做的就是：画圆drawPoint和画线drawLine
 *
 * 实现自动画圆的效果
 * 1、检测手势移动的位置是否处于圆内
 * 2、圆内的话则画圆 drawPoint
 * 3、已经画过实心圆的圆，无需重复检测
 *
 * 实现解锁成功：
 * 1、检测路径是否是对的
 * 2、如果是对的就重置，圆圈变绿
 * 3、不对也重置，圆圈变红
 * 4、重置
 */

(function() {
    window.canvasLock = function(obj) {
        this.height = obj.height
        this.width = obj.width
        // 表示一行有几个圆
        this.chooseType = obj.chooseType
    }
    /**
     * @Author: YXS
     * @Description: 程序初始化
     */
    canvasLock.prototype.init = function() {
        console.log('初始化')
        this.initDom()
        this.canvas = document.getElementById('canvas')
        this.ctx = this.canvas.getContext('2d')
        this.ctx.fillStyle = '#CFE6FF'
        this.ctx.lineWidth = 2
        // 初始化点击的点是否在圆内
        this.touchFlag = false
        this.createCircle()
        this.bindEvent()
    }
    /**
     * @Author: YXS
     * @Description: js 方式动态生成 dom
     */
    canvasLock.prototype.initDom = function() {
        // 生成 H3 标题
        var wrap = document.createElement('div')
        var str = '<h3 id="title" class="title">绘制解锁图案</h3>'
        wrap.setAttribute('style', 'position: absolute; top: 0; left: 0; right: 0; bottom: 0; ')

        // 生成 canvas
        var canvas = document.createElement('canvas')
        canvas.setAttribute('id', 'canvas')
        // 这句话等价于：<canvas style='background-color: #305066; display: inline-block; margin-top: 15px'></canvas>
        canvas.style.cssText = 'background-color: #305066; display: inline-block; margin-top: 15px'

        wrap.innerHTML = str
        wrap.appendChild(canvas)

        var width = this.width || 300
        var height = this.height || 300

        document.body.appendChild(wrap)
        // 高清屏缩放
        canvas.style.width = width + 'px'
        canvas.style.height = height + 'px'
        // 设置 canvas 的默认宽高
        canvas.width = width
        canvas.height = height
    }
    /**
     * @Author: YXS
     * @Description: 创建解锁点的坐标，根据 canvas 的大小来平均分配半径
     */
    canvasLock.prototype.createCircle = function() {
        // 代表一行有几个圆
        var circlesInRow = this.chooseType;
        var count = 0;
        // 小圆圈的半径 —— 根据一行有几个圆来决定，圆跟圆之间的间隔正好是两个半径，一个圆的距离。
        // 因为一行3个圆14个半径，一行4各院有18个半径，由此得出下面的公式
        this.r = this.ctx.canvas.width / (2 + 4 * circlesInRow);
        // 下面这一段代码是求每一个圆的中心坐标点
        this.lastPoint = [];
        this.arr = [];
        this.restPoint = [];
        var r = this.r;
        // 生成坐标点
        for (var i = 0; i < circlesInRow; i++) {
            for (var j = 0; j < circlesInRow; j++) {
                count ++;
                var obj = {
                    x: j * 4 * r + 3 * r,
                    y: i * 4 * r + 3 * r,
                    index: count
                }
                // 将所有圆圈都保存在数组中
                this.arr.push(obj)
                // 记录还没有生成实心圆的圆圈
                this.restPoint.push(obj)
            }
        }
        this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height)
        for (var i = 0; i < this.arr.length; i++) {
            // 调用画圆函数
            this.drawCle(this.arr[i].x, this.arr[i].y)
        }
    }
    /**
     * @Author: YXS
     * @Description: 初始化解锁密码面板
     */
    canvasLock.prototype.drawCle = function(x, y) {
        // 根据 x 轴和 y 轴画圆
        this.ctx.beginPath()
        this.ctx.strokeStyle = '#CFE6FF'
        this.ctx.arc(x, y, this.r, 0, Math.PI  * 2, true)
        this.ctx.closePath()
        this.ctx.stroke()
    }
    /**
     * @Author: YXS
     * @Description: 给 canvas 绑定事件
     */
    canvasLock.prototype.bindEvent = function() {
        var self = this
        this.canvas.addEventListener("touchstart", function(e) {
            // touchstart 判断是否点击的位置处于圆内 getPosition，处于则初始化 lastpoint、restPoint
            // po 有 x 和 y，并且是相较于 canvas 边距
            var po = self.getPosition(e)
            // 判断是否在圆内的原理：多出来的这条 x 轴和 y 轴 < r 在圆内
            for(var i = 0; i < self.arr.length; i++) {
                if(Math.abs(po.x - self.arr[i].x) < self.r && Math.abs(po.y - self.arr[i].y) < self.r) {
                    // 是否在圆内的标志
                    self.touchFlag = true
                    // 存放的就是选中的圆圈的坐标值
                    self.lastPoint.push(self.arr[i])
                    // 删掉已经生成了实心圆的坐标系
                    self.restPoint.splice(i, 1)
                    break
                }
            }
        }, false)
        this.canvas.addEventListener("touchmove", function(e) {
            // touchmove做的就是：画圆drawPoint和画线drawLine
            if(self.touchFlag) {
                self.update(self.getPosition(e))
            }
        }, false)
        this.canvas.addEventListener("touchend", function(e) {
            if (self.touchFlag) {
                self.storePass(self.lastPoint);
                setTimeout(function(){
                    self.reset();
                }, 300);
            }
        }, false)
    }
    /**
     * @Author: YXS
     * @Description: 获取 touch 点相对于 canvas 的坐标
     */
    canvasLock.prototype.getPosition = function(e) {
        var rect = e.currentTarget.getBoundingClientRect();
        var po = {
            // e.touches[0]的坐标是基于屏幕的，不是基于 canvas 的，所以要减去 canvas 的屏幕距离，从而得到基于 canvas 的坐标点
            // rect.left 是 canvas 距离屏幕左边的距离
            x: (e.touches[0].clientX - rect.left),
            // rect.top 是 canvas 距离屏幕上边的距离
            y: (e.touches[0].clientY - rect.top)
        }
        return po
    }
    /**
     * @Author: YXS
     * @Description: 画线
     * @param po 经过的圆的圆心坐标
     */
    canvasLock.prototype.update = function(po) {
        // 清空画布
        this.ctx.clearRect(0,0, this.ctx.canvas.width, this.ctx.canvas.height)
        // 重新绘制圆圈
        for (var i = 0; i < this.arr.length; i++) {
            this.drawCle(this.arr[i].x, this.arr[i].y)
        }
        // 画圆
        this.drawPoint()
        // 画线
        this.drawLine(po)

        for (var i = 0; i < this.restPoint.length; i++) {
            // 检测手势移动的位置是否处于下一个圆内
            if (Math.abs(po.x - this.restPoint[i].x) < this.r && Math.abs(po.y - this.restPoint[i].y) < this.r) {
                // 若是的话就画一个实心圆
                this.drawPoint()
                // 存放的就是选中的圆圈的坐标值
                this.lastPoint.push(this.restPoint[i])
                // 删掉已经生成了实心圆的坐标系
                this.restPoint.splice(i, 1)
                break
            }
        }
    }
    /**
     * @Author: YXS
     * @Description: 画圆
     */
    canvasLock.prototype.drawPoint = function() {
        for(var i = 0; i < this.lastPoint.length; i++) {
            this.ctx.beginPath()
            this.ctx.arc(this.lastPoint[i].x, this.lastPoint[i].y, this.r / 2, 0, Math.PI * 2, true)
            this.ctx.closePath()
            this.ctx.fill()
        }
    }
    /**
     * @Author: YXS
     * @Description: 画线
     * @param po 经过的圆的圆心坐标
     */
    canvasLock.prototype.drawLine = function(po) {
        this.ctx.beginPath()
        this.ctx.lineWidth = 3
        // 从第一个圆心开始画
        this.ctx.moveTo(this.lastPoint[0].x, this.lastPoint[0].y)
        // 到经过的圆心的点
        for(var i = 0; i < this.lastPoint.length; i++) {
            this.ctx.lineTo(this.lastPoint[i].x, this.lastPoint[i].y)
        }
        this.ctx.lineTo(po.x, po.y)
        this.ctx.stroke()
        this.ctx.closePath()
    }
    /**
     * @Author: YXS
     * @Description: 处理检测结果
     */
    canvasLock.prototype.storePass = function() {
        if (this.checkPass()) {
            // 如果是对的就重置，圆圈变绿
            document.getElementById('title').innerHTML = '解锁成功';
            this.drawStatusPoint('#2CFF26');
        }else{
            // 不对也重置，圆圈变红
            document.getElementById('title').innerHTML = '解锁失败';
            this.drawStatusPoint('red');
        }
    }
    /**
     * @Author: YXS
     * @Description: 检测路径是否正确
     */
    canvasLock.prototype.checkPass = function() {
        var pwd = '135', repwd = '';
        for(var i = 0; i < this.lastPoint.length; i++) {
            repwd += this.lastPoint[i].index
        }
        return pwd === repwd
    }
    /**
     * @Author: YXS
     * @Description: 设置圆圈状态
     * @param color 圆圈线条颜色
     */
    canvasLock.prototype.drawStatusPoint = function(color) {
        for(var i = 0; i < this.lastPoint.length; i++) {
            this.ctx.strokeStyle = color
            this.ctx.beginPath()
            this.ctx.arc(this.lastPoint[i].x, this.lastPoint[i].y, this.r, 0, Math.PI  * 2, true)
            this.ctx.closePath()
            this.ctx.stroke()
        }
    }
    /**
     * @Author: YXS
     * @Description: 重置画布
     */
    canvasLock.prototype.reset = function() {
        this.createCircle()
    }
})()