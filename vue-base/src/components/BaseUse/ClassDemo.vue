<!--
 * @Author: YXS
 * @Date: 2020-11-05 15:17:30
 * @LastEditors: YXS
 * @LastEditTime: 2020-11-05 15:22:03
 * @Description: vue  class  style
-->
<template>
  <div>
    <p :class="{ black: isBlack, yello: isYellow }">使用 class</p>
    <p :class="[black, yellow]">使用 class (数组)</p>
    <p :style="styleData">使用 style</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isBlack: true,
      isYellow: true,
      black: "black",
      yellow: "yellow",
      styleData: {
        fontSize: "40px", // 转换为驼峰
        size: "pink",
        backgroundColor: "#ccc",
      },
    };
  },
};
</script>

<style>
</style>