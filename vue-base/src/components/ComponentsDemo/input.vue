<!--
 * @Author: YXS
 * @Date: 2020-11-05 16:45:53
 * @LastEditors: YXS
 * @LastEditTime: 2020-11-06 10:05:58
 * @Description: 组件示例
-->
<template>
  <div>
      <input type="text" v-model="title">
      <button @click="addTitle">add</button>
  </div>
</template>

<script>
import event from './event'
export default {
    data () {
        return {
            title: ''
        }
    },
    methods: {
        addTitle() {
            // 调用父组件的事件
            this.$emit('add', this.title)
            // 调用自定义事件
            event.$emit('onAddTitle', this.title)
            this.title = ''
        }
    }
}
</script>

<style>

</style>