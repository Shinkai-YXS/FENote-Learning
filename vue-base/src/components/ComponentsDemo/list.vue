<!--
 * @Author: YXS
 * @Date: 2020-11-05 16:46:00
 * @LastEditors: YXS
 * @LastEditTime: 2020-11-06 11:53:18
 * @Description: 组件示例
-->
<template>
  <div>
      <ul>
          <li v-for="item in list" :key="item.id">
              {{item.title}}
              <button @click="deleteItem(item.id)">删除</button>
          </li>
      </ul>
  </div>
</template>

<script>
import event from './event'
export default {
    props: {
        // prop 类型和默认值
        list: {
            type: Array,
            default() {
                return []
            }
        }
    },
    data() {
        return {

        }
    },
    methods: {
        deleteItem(id) {
            this.$emit('delete', id)
        },
        addTitleHandler(title) {
            console.log('on add title', title)
        }
    },
    beforeCreate() {
        console.log('list beforeCreate')
    },
    created() {
        console.log('list created')
    },
     beforeMount() {
        console.log('list beforeMount')
    },
    mounted() {
        console.log('list mounted')
        event.$on('onAddTitle', this.addTitleHandler)
    },
    beforeUpdate() {
        console.log('list beforeUpdate')
    },
    updated() {
        console.log('list updated')
    },
    beforeDestroy() {
        // 及时解绑自定义事件，否则可能造成内存泄露
        console.log('list beforeDestroy')
        event.$off('onAddTitle', this.addTitleHandler)
    },
    destroyed() {
        console.log('list destroyed')
    }

}
</script>

<style>

</style>
