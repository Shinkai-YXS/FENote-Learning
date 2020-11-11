/*
 * @Author: YXS
 * @Date: 2020-11-09 10:23:22
 * @LastEditors: YXS
 * @LastEditTime: 2020-11-09 10:24:46
 * @Description: mixin
 */
export default {
    data() {
        return {
            city: '北京'
        }
    },
    methods: {
        showName() {
            console.log('showName ', this.name)
        }
    },
    mounted() {
        console.log('mixin mounted ', this.name)
    }
}
