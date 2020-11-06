<!--
 * @Author: YXS
 * @Date: 2020-11-05 16:45:47
 * @LastEditors: YXS
 * @LastEditTime: 2020-11-06 11:42:50
 * @Description: 组件示例
-->
<template>
  <div>
      <Input @add="addHandler" />
      <List :list="list" @delete="deleteHandler"/>
  </div>
</template>

<script>
import Input from './input'
import List from './list'
export default {
    components: {Input, List},
    data() {
        return {
            list: [
                {id: 'id-1', title: '标题1'},
                {id: 'id-2', title: '标题2'}
            ]
        }
    },
    methods: {
        addHandler(title) {
            this.list.push({
                id: `id-${Date.now()}`,
                title
            })
        },
        deleteHandler(id) {
            this.list = this.list.filter(item => item.id !== id)
        }
    },
    beforeCreate() {
        console.log('index beforeCreate')
    },
    created() {
        console.log('index created')
    },
    beforeMount() {
        console.log('index beforeMount')
    },
    mounted() {
        console.log('index mounted')
    },
    beforeUpdate() {
        console.log('index beforeUpdate')
    },
    updated() {
        console.log('index updated')
    },
    beforeDestroy() {
        console.log('index beforeDestroy')
    },
    destroyed() {
        console.log('index destroyed')
    }
}
</script>

<style>

</style>