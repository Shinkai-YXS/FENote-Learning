<!--
 * @Author: YXS
 * @Date: 2020-11-06 14:12:09
 * @LastEditors: YXS
 * @LastEditTime: 2020-11-06 17:12:20
 * @Description: 自定义 v-model
-->
<template>
  <div>
      <p>vue 高级特性</p>
      <hr>
      <!-- 自定义 v-model -->
      <!-- <p>{{name}}</p> -->
      <!-- <CustomVModel v-model="name" /> -->

      <!-- nextTick -->
      <!-- <NextTick /> -->

      <!-- slot 基本使用 -->
      <!-- <SlotDemo :url="website.url">
          {{website.title}}
      </SlotDemo> -->

      <!-- slot 作用域插槽 -->
      <!-- <ScopedSlotDemo :url='website.url'> -->
          <!-- 获取子元素中提供的数据, slotProps 可以是任意字符串-->
          <!-- <template v-slot:default="slotProps"> -->
              <!-- slotData 对应子组件传出来的值，所以可以直接取其属性 -->
              <!-- {{slotProps.slotData.title}} -->
          <!-- </template> -->
      <!-- </ScopedSlotDemo> -->
      <!-- slot 作用域插槽简写 -->
      <!-- <ScopedSlotDemo :url='website.url' v-slot="slotProps">
          {{slotProps.slotData.title}}
      </ScopedSlotDemo> -->

      <!-- 动态组件 -->
      <!-- <component v-bind:is="NextTickName"></component> -->

      <!-- keep-alive -->
      <KeepAlive />
  </div>
</template>

<script>
export default {
    components: {
        // CustomVModel: () => import('./CustomVModel')
        // NextTick: () => import('./NextTick'),
        // SlotDemo: () => import('./SlotDemo')
        // ScopedSlotDemo: () => import('./ScopedSlotDemo'),
        KeepAlive: () => import('./KeepAlive')
    },
    data() {
        return {
            name: 'xs',
            website: {
                url: '',
                title: '我是 title',
                subTitle: '我是 subTitle'
            },
            // 这里的 NextTickName 值与引入的组件名一致
            NextTickName: 'NextTick'
        }
    }
}
</script>

<style>

</style>
