<template>
  <div id="app">
    <simple-sudoku/>
  </div>
</template>

<script>
import SimpleSudoku from "@/components/SimpleSudoku";

export default {
  name: 'App',
  components: {
    SimpleSudoku,
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
