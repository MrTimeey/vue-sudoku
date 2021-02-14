<template>
  <div id="app-sudoku">

    <div class="buttons-container">

      <button class="button" v-on:click="initializeGame(0)" v-if="!isGameStarted && !showAnswer">Easy</button>
      <button class="button" v-on:click="initializeGame(1)" v-if="!isGameStarted && !showAnswer">Medium</button>
      <button class="button" v-on:click="initializeGame(2)" v-if="!isGameStarted && !showAnswer">Hard</button>

      <transition name="fade">
        <button class="button" v-on:click="evaluateGame()" v-if="isGameStarted && !showAnswer">Verify</button>
      </transition>
    </div>

    <transition name="fade">
      <div class="grid-sudoku" v-if="isGameStarted && !showAnswer">

        <div v-for="(row, rowIndex) in sudokuMatrix" class="grid-row" :key="rowIndex">
          <div v-for="(cell, cellIndex) in row" class="grid-cell" :key="rowIndex + '_' + cellIndex">
            <input type="text" v-bind:key="cell.num" v-model="cell.num" class="grid-cell-editor"
                   :class="cell.given? 'given-cell': 'empty-cell'"/>
          </div>
        </div>

      </div>
    </transition>

    <button class="button" v-on:click="resolveGame()" v-if="isGameStarted && !showAnswer" style="margin-top: 30px;">
      Resolve
    </button>
    <button class="button" v-on:click="cancelGame()" v-if="isGameStarted && !showAnswer">New</button>

    <transition name="fade">
      <div v-if="showAnswer" class="answer">
        <img alt="resultGif" v-bind:src="require('../assets/success.gif')" class="answer-image" v-if="isValid"/>
        <img alt="resultGif" v-bind:src="require('../assets/fail.gif')" class="answer-image" v-else/>
      </div>
    </transition>

  </div>
</template>

<script>

import {SudokuGenerator} from 'js-sudoku-generator'
import {isValidSudoku} from 'is-valid-sudoku'

export default {
  name: 'SudokuGame',
  data: () => ({

    sudokuBoard: {},
    sudokuSheet: {},
    sudokuMatrix: [],
    initializeGameText: "Start!",
    evaluateGameText: "Verify!",
    answerImage: "",
    isGameStarted: false,
    showAnswer: false,
    isValid: false
  }),
  mounted() {
    SudokuGenerator.generate(2);
    this.sudokuBoard = SudokuGenerator.generatedBoards[0];
  },
  methods: {

    cancelGame() {
      this.isGameStarted = false;
      SudokuGenerator.generate(2);
      this.sudokuBoard = SudokuGenerator.generatedBoards[0];
    },

    resolveGame() {
      let solution = this.sudokuBoard.board;
      for (let i = 0; i < this.sudokuMatrix.length; ++i) {
        for (let k = 0; k < this.sudokuMatrix.length; ++k) {
          let obj = this.sudokuMatrix[i][k];
          if (!obj.given) {
            obj.num = solution[i][k];
          }
        }
      }
    },

    initializeGame(difficulty) {

      this.sudokuSheet = this.sudokuBoard.getSheet(difficulty);

      this.sudokuMatrix = this.sudokuSheet.map(row => row.map(cell => {
        let given = !!cell;
        return {num: cell, given: given}
      }));
      this.isGameStarted = true;
    },

    transformMatrix(matrix) {
      let copyOfSudokuMatrix = [];
      for (let i = 0; i < matrix.length; ++i) {

        if (!copyOfSudokuMatrix[i])
          copyOfSudokuMatrix[i] = [];

        for (let k = 0; k < matrix[i].length; ++k) {
          copyOfSudokuMatrix[i][k] = matrix[i][k].num;
        }
      }
      return copyOfSudokuMatrix;
    },

    evaluateGame() {
      this.showAnswer = true;
      this.isValid = isValidSudoku(this.transformMatrix(this.sudokuMatrix));
      setTimeout(() => {
        this.showAnswer = false;
      }, 3000);

    }

  }
}
</script>

<style scoped>


#app-sudoku {
  place-self: center;
  display: grid;
  grid-template-rows: auto 1fr;
  justify-items: center;
}

.buttons-container {
  display: grid;
  grid-template-rows: auto auto;
}

.button {
  display: inline-block;
  border-radius: 6px;
  background-color: whitesmoke;
  border: none;
  color: black;
  text-align: center;
  font-size: 16px;
  padding: 10px;
  width: 230px;
  transition: all 0.5s;
  cursor: pointer;
  margin: 0px 0px 25px 0px;
  font-family: 'Dosis', sans-serif;
  font-weight: bold;
}

.button span {
  cursor: pointer;
  display: inline-block;
  position: relative;
  transition: 0.5s;
}


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

.given-cell {
  font-weight: normal
}

.empty-cell {
  font-weight: bold
}

.grid-cell-editor {
  border: none;
  width: 20px;
  height: 20px;
  font-family: 'Dosis', sans-serif;
  text-align: center;
  font-size: 18px;
  transition: all ease 1.0s;
}

.answer {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
}

.answer-image {
  border: 2px solid black;
  width: 300px;
  height: 300px;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}

.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */
{
  opacity: 0;
}
</style>
