<!--
 * @Author: YXS
 * @Date: 2020-11-06 17:06:32
 * @LastEditors: YXS
 * @LastEditTime: 2020-11-06 17:38:10
 * @Description: keep-alive
-->
<template>
    <p>state C</p>
</template>

<script>
export default {
    mounted() {
        console.log('C mounted')
    },
    destroyed() {
        console.log('C destroyed')
    },
    activated() {
        console.log('C activated')
    },
    deactivated() {
        console.log('C deactivated')
    }
}
</script>

<style>

</style>