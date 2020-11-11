/*
 * @Author: YXS
 * @Date: 2020-11-09 16:26:39
 * @LastEditors: YXS
 * @LastEditTime: 2020-11-09 17:14:23
 * @Description: 响应式 demo
 */
// 触发更新视图
function updateView() {
    console.log('视图更新')
}

// 重新定义数组原型
const oldArrayProperty = Array.prototype;
// 创建新对象，原型指向 oldArrayProperty ，再扩展新的方法不会影响原型
const arrProto = Object.create(oldArrayProperty);
['push', 'pop', 'shift', 'unshift', 'splice'].forEach(methodName => {
    arrProto[methodName] = function() {
        // 触发视图更新
        updateView()
        oldArrayProperty[methodName].call(this, ...arguments)
    }
})

// 重新定义属性，监听起来
function defineReactive(target, key, value) {
    // 深度监听
    observer(value)
    // 核心 API
    Object.defineProperty(target, key, {
        get() {
            return value
        },
        set(newValue) {
            if (newValue !== value) {
                // 深度监听
                observer(newValue)
                // 设置新值
                // 注意，value 一直在闭包中，此处设置完之后，再 get 时也是会获取最新的值
                value = newValue
                // 触发更新视图
                updateView()
            }
        }
    })
}

// 监听对象属性
function observer(target) {
    if (typeof target !== 'object' || target === null) {
        // 不是对象或数组
        return target
    }
    if (Array.isArray(target)) {
        target.__proto__ = arrProto
    }
    // 重新定义各个属性（for in 也可以遍历数组）
    for(let key in target) {
        defineReactive(target, key, target[key])
    }
}


// 准备数据
const data = {
    name: 'zhangsan',
    age: 20,
    info: {
        address: '北京' // 需要深度监听
    },
    nums: [10, 20, 30]
}

// 监听数据
observer(data)

// 测试
// data.name = 'lisi'
// data.age = 21
// data.x = '100'
// delete data.name
// data.info.address = '成都'

data.nums.push(40)


