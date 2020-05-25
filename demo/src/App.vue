<template>
  <div id="app">
    <app-header style="z-index:1"></app-header>
    <router-view style="z-index: -1"/>
    <app-footer style="margin-top: 250px"></app-footer>
  </div>
</template>

<script>
  import Header from './components/Header';
  import AppFooter from "./components/Footer";
  export default {
  name: 'App',
  components: {
    'app-footer':AppFooter,
    'app-header':Header,
  },
  mounted () {
      this.$router.afterEach((to, from, next) => {
          window.scrollTo(0, 0);
      })
  },
}
</script>

<style>
#app {
  font-family: 'Times New Roman', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  top: 0;
  left: 0;
  position: absolute;
  width: 100%;
  letter-spacing: 1px;
  background-color: #eeeeee;
}
pre {
  font-family: 'Times New Roman', Helvetica, Arial, sans-serif;
}
</style>
