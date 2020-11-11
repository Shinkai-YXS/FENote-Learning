<!--
 * @Author: YXS
 * @Date: 2020-11-06 15:39:45
 * @LastEditors: YXS
 * @LastEditTime: 2020-11-06 16:01:11
 * @Description: slot —— 作用域插槽
-->
<template>
  <a :href="url">
      <!-- v-bind:slotData="website" 这里是将值提供给父元素，可简写为 :slotData="website" -->
      <slot v-bind:slotData="website">
          {{website.subTitle}} <!-- 默认值显示 subTitle，即父组件不传内容时 -->
      </slot>
  </a>
</template>

<script>
export default {
    props: ['url'],
    data() {
        return {
            website: {
                url: '',
                title: '我是默认 title',
                subTitle: '我是默认 subTitle'
            }
        }
    }
}
</script>

<style>

</style>
