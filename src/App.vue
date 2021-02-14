<template>
  <div id="app">
    <sudoku-game/>
  </div>
</template>

<script>
import SudokuGame from "@/components/SudokuGame";

export default {
  name: 'App',
  components: {
    SudokuGame,
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
