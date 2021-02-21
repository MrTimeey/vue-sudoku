<template>
  <div class="sudoku-container">
    <div class="grid-sudoku">
      <div v-for="(row, rowIndex) in sudokuMatrix" class="grid-row" :key="rowIndex">
        <div v-for="(cell, cellIndex) in row" class="grid-cell" :key="rowIndex + '_' + cellIndex">
          <input v-bind:key="cell.num"
                 v-model="cell.num"
                 class="grid-cell-editor"
                 :class="cell.given? 'given-cell': 'empty-cell'"
                 :disabled="cell.given"
                 @click="hint(cell, rowIndex, cellIndex)"
                 type="number"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {mapGetters} from "vuex"

export default {
  name: "SudokuGrid",
  props: {
    sudokuMatrix: Array
  },
  computed: {
    ...mapGetters({cellSolution: 'game/cellSolution'})
  },
  methods: {
    hint(cell, rowIndex, cellIndex) {
      if (this.$store.getters['hint/hintModeActivated'] && !cell.given) {
        this.$store.commit("hint/reduceByOne");
        cell.num = this.cellSolution(rowIndex, cellIndex);
        cell.given = true;
      }
    }
  }

}
</script>

<style scoped lang="scss">

.grid-sudoku {
  display: table;
  background: white;
  border: 3px solid black;
}

.grid-sudoku > div:nth-child(3), .grid-sudoku > div:nth-child(6) {
  border-bottom: 3px solid black;
}

.grid-row > div:nth-child(3), .grid-row > div:nth-child(6) {
  border-right: 3px solid black;
}

.grid-cell {
  display: table-cell;
  padding: 10px;
  border: 1px solid gray;
}

.grid-cell-editor {
  border: none;
  width: 20px;
  height: 20px;
  font-family: 'Dosis', sans-serif;
  background-color: white !important;
  text-align: center;
  font-size: 20px;
  transition: all ease 1.0s;
}

.given-cell {
  font-weight: normal
}

.empty-cell {
  color: darkred;
  font-weight: bold;
}

/* Chrome, Safari, Edge, Opera */
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

/* Firefox */
input[type=number] {
  -moz-appearance: textfield;
}

@media screen and (max-width: 768px) {
  .grid-cell {
    padding: 8px !important;
  }
  .grid-cell-editor {
    font-size: 18px;
    width: 18px;
    height: 18px;
  }
}
</style>