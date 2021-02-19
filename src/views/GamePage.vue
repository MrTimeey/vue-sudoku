<template>
  <div class="game-container">
    <b-button class="b-btn" @click="verifyGame">Verify</b-button>
    <sudoku-grid class="sudoku-grid" :sudoku-matrix="this.$store.state.game.currentGame"/>
    <b-button class="b-btn" @click="solveGame">Resolve</b-button>
    <b-button class="b-btn" @click="cancelGame">New</b-button>
  </div>
</template>

<script>
import SudokuGrid from "@/components/SudokuGrid";
import BButton from "@/components/base/BButton";
export default {
  name: "GamePage",
  components: {BButton, SudokuGrid},
  methods: {
    cancelGame() {
      this.$router.push({name: 'StartPage'})
      this.$store.state.game.sudokuBoard = undefined;
    },
    verifyGame() {
      this.$router.push({name: 'ResultPage'});
    },
    solveGame() {
      this.$store.dispatch('game/solveGame');
    }
  }
}
</script>

<style scoped lang="scss">

.game-container {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.sudoku-grid {
  margin-top: 20px;
  margin-bottom: 20px;
}

</style>