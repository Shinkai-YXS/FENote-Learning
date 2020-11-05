<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <TplDemo />
    <ComputedDemo />
    <WatchDemo />
  </div>
</template>

<script>
import TplDemo from './components/BaseUse/TplDemo.vue'
import ComputedDemo from './components/BaseUse/ComputedDemo'
import WatchDemo from './components/BaseUse/WatchDemo'
export default {
  name: 'App',
  components: {
    TplDemo, ComputedDemo, WatchDemo
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
