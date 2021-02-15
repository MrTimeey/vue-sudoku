<template>
  <div id="app">
    <Ribbon id="ribbon"
        v-bind="ribbonOptions"
    ></Ribbon>
    <sudoku-game/>
  </div>
</template>

<script>
import SudokuGame from "@/components/SudokuGame";

export default {
  name: 'App',
  components: {
    SudokuGame,
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
  color: #2c3e50;
  margin-top: 60px;
}
</style>
