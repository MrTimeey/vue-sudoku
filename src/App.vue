<template>
  <v-app id="app">
    <Ribbon id="ribbon"
        v-bind="ribbonOptions"
    ></Ribbon>
    <router-view></router-view>
  </v-app>
</template>

<script>

export default {
  name: 'App',
  components: {
  },
  data: () => ({
    ribbonOptions: {
      text: 'Fork me on GitHub',
      linkUrl: 'https://github.com/MrTimeey/vue-sudoku',
      fixed: true,
      left: true,
      bottom: true,
    }
  })
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  padding: 60px;
}
</style>
