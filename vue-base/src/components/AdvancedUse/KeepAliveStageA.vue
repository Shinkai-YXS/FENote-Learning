<!--
 * @Author: YXS
 * @Date: 2020-11-06 17:06:19
 * @LastEditors: YXS
 * @LastEditTime: 2020-11-06 17:37:56
 * @Description: keep-alive
-->
<template>
  <p>state A</p>
</template>

<script>
export default {
    mounted() {
        console.log('A mounted')
    },
    destroyed() {
        console.log('A destroyed')
    },
    activated() {
        console.log('A activated')
    },
    deactivated() {
        console.log('A deactivated')
    }
}
</script>

<style>

</style>
