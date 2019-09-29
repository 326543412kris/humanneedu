<template>
  <div id="app">
    <app-header></app-header>
    <router-view/>
  </div>
</template>

<script>
  import Header from './components/Header';
  export default {
  name: 'App',
  components: {
    'app-header':Header,
  },
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  top: 0;
  left: 0;
  height: 100%;
  position: absolute;
  width: 100%;
}
</style>
