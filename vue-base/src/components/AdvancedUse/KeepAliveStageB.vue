<!--
 * @Author: YXS
 * @Date: 2020-11-06 17:06:27
 * @LastEditors: YXS
 * @LastEditTime: 2020-11-06 17:38:03
 * @Description: keep-alive
-->
<template>
    <p>state B</p>
</template>

<script>
export default {
    mounted() {
        console.log('B mounted')
    },
    destroyed() {
        console.log('B destroyed')
    },
    activated() {
        console.log('B activated')
    },
    deactivated() {
        console.log('B deactivated')
    }
}
</script>

<style>

</style>