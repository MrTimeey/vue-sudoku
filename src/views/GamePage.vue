<template>
  <div class="game-container">
    <b-button class="b-btn"
              @click="verifyGame"
              v-if="!gameFinished">
      {{ $t('game.verify') }}
    </b-button>
    <b-button class="b-btn"
              @click="solveGame"
              v-if="gameFinished">
      {{ $t('game.resolve') }}
    </b-button>
    <life-display/>
    <sudoku-grid class="sudoku-grid" :sudoku-matrix="this.$store.state.game.currentGame"/>
    <b-button class="b-btn" @click="cancelGame">{{ $t('game.new') }}</b-button>
    <b-button class="b-btn" @click="$store.commit('game/clearUserInput')" v-if="!this.gameFinished">{{ $t('game.clear') }}</b-button>
    <hint-display class="hint" v-if="!this.gameFinished"/>
  </div>
</template>

<script>
import SudokuGrid from "@/components/SudokuGrid";
import BButton from "@/components/base/BButton";
import LifeDisplay from "@/components/LifeDisplay";
import HintDisplay from "@/components/HintDisplay";
import gameMixin from "@/mixins/gameMixin";

export default {
  name: "GamePage",
  components: {HintDisplay, LifeDisplay, BButton, SudokuGrid},
  mixins: [gameMixin],
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

.hint {
  margin: 10px 0 20px 0;
}

</style>