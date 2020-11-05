<!--
 * @Author: YXS
 * @Date: 2020-11-05 14:50:08
 * @LastEditors: YXS
 * @LastEditTime: 2020-11-05 15:02:35
 * @Description: watch
-->
<template>
  <div>
      <input v-model="name">
      <input v-model="info.city">
  </div>
</template>

<script>
export default {
    data() {
        return {
            name: 'xs',
            info: {
                city: 'cd'
            }
        }
    },
    watch: {
        name(newVal, oldVal) {
            // 值类型，可以正常拿到 oldVal 和 newVal
            console.log('watch name', newVal, oldVal)
        },
        info: {
            handler(newVal, oldVal) {
                // 引用类型，拿不到 oldVal，因为指针相同，此时已经指向新的 newVal
                console.log('watch info', newVal, oldVal)
            },
            deep: true // 深度监听
        }
    }
}
</script>

<style>

</style>