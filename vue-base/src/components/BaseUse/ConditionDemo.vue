<!--
 * @Author: YXS
 * @Date: 2020-11-05 15:26:55
 * @LastEditors: YXS
 * @LastEditTime: 2020-11-05 15:29:58
 * @Description: Vue 条件渲染
-->
<template>
  <div>
      <!-- v-if -->
      <p v-if="type === 'a'">A</p>
      <p v-else-if="type === 'b'">B</p>
      <p v-else>other</p>

      <!-- v-show -->
      <p v-show="type === 'a'">A by v-show</p>
      <p v-show="type === 'b'">B by v-show</p>
  </div>
</template>

<script>
export default {
    data() {
        return {
            type: 'a'
        }
    }
}
</script>

<style>

</style>
