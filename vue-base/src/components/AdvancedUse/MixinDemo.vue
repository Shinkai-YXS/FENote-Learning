<!--
 * @Author: YXS
 * @Date: 2020-11-09 10:17:03
 * @LastEditors: YXS
 * @LastEditTime: 2020-11-09 10:22:42
 * @Description: mixin
-->
<template>
  <div>
      <p>{{name}} {{major}} {{city}}</p>
      <button @click="showName">显示姓名</button>
  </div>
</template>

<script>
import myMixin from './mixin'
export default {
    mixins: [myMixin], // 可以添加多个，会自动合并起来
    data() {
        return {
            name: 'xs',
            major: 'web 前端'
        }
    },
    methods: {

    },
    mounted() {
        console.log('component mounted', this.name)
    }
}
</script>

<style>

</style>