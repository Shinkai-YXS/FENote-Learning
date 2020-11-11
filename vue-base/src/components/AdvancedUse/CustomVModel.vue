<!--
 * @Author: YXS
 * @Date: 2020-11-06 14:12:03
 * @LastEditors: YXS
 * @LastEditTime: 2020-11-06 14:49:52
 * @Description: 自定义 v-model
-->
<template>
  <input type="text" :value="text" @input="$emit('change', $event.target.value)">
  <!--
      需要注意的点：
      1、上面的 input 使用了 :value 而不是 v-model
      2、上面的 change 事件要与 model.event 的值对应起来
      3、model.prop 的值要与 :value 和 props 传入的属性名对应起来
   -->
</template>

<script>
export default {
    name: 'CustomVModel',
    model: {
        prop: 'text',  // 对应 props text
        event: 'change'
    },
    props: {
        text: String,
        default() {return  ''}
    }
}
</script>

<style>

</style>
