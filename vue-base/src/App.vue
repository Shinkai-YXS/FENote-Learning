<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <!-- <TplDemo />
    <ComputedDemo />
    <WatchDemo />
    <ClassDemo /> -->
    <!-- <ConditionDemo /> -->
    <!-- <ListDemo /> -->
    <!-- <EventDemo /> -->
    <!-- <FormDemo /> -->
    <!-- <button @click="show = !show">展示</button> -->
    <!-- <ComponentsDemo v-if="show" /> -->
    <AdvancedUse />
  </div>
</template>

<script>
// import TplDemo from './components/BaseUse/TplDemo.vue'
// import ComputedDemo from './components/BaseUse/ComputedDemo'
// import WatchDemo from './components/BaseUse/WatchDemo'
// import ClassDemo from './components/BaseUse/ClassDemo'
// import ConditionDemo from './components/BaseUse/ConditionDemo'
// import ListDemo from './components/BaseUse/ListDemo'
// import EventDemo from './components/BaseUse/EventDemo'
// import FormDemo from './components/BaseUse/FormDemo'
// import HelloWorld from './components/HelloWorld'
// import ComponentsDemo from './components/ComponentsDemo/index'
import AdvancedUse from './components/AdvancedUse/index'
export default {
  name: 'App',
  components: {
    // TplDemo, ComputedDemo, WatchDemo, ClassDemo
    // ConditionDemo
    // ListDemo
    // EventDemo
    // FormDemo
    // HelloWorld,
    // ComponentsDemo
    AdvancedUse
  },
  data() {
    return {
      show: true
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
