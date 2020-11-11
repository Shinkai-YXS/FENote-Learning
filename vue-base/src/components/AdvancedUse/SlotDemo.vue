<!--
 * @Author: YXS
 * @Date: 2020-11-06 15:28:23
 * @LastEditors: YXS
 * @LastEditTime: 2020-11-06 15:30:24
 * @Description: slot 用法
-->
<template>
  <a :href="url">
      <slot>
          默认内容，即父组件没设置内容时，这里显示
      </slot>
  </a>
</template>

<script>
export default {
    props: ['url'],
    data() {
        return {}
    }
}
</script>

<style>

</style>