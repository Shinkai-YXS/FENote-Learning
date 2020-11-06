<!--
 * @Author: YXS
 * @Date: 2020-11-05 16:06:56
 * @LastEditors: YXS
 * @LastEditTime: 2020-11-05 16:17:24
 * @Description: 事件
-->
<template>
  <div>
      <p>{{num}}</p>
      <button @click="increment1">+1</button>
      <button @click="increment2(2, $event)">+2</button>
  </div>
</template>

<script>
export default {
    data() {
        return {
            num: 0
        }
    },
    methods: {
        increment1(event) {
            console.log('event', event, event.__proto__.constructor)
            console.log('event.target', event.target)
            console.log('event.currentTarget', event.currentTarget)
            this.num++
        },
        increment2(val, event) {
            console.log('event.target', event.target)
            this.num += val
        }
    }
}
</script>

<style>

</style>
