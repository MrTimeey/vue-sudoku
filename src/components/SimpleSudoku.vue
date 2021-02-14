<template>
  <div id="app-sudoku">

    <div class="buttons-container">
      <button class="button" v-on:click="initializeGame()"><span>{{ initializeGameText }}</span></button>

      <transition name="fade">
        <button class="button" v-on:click="evaluateGame()" v-if="isGameStarted"><span>{{ evaluateGameText }}</span></button>
      </transition>
    </div>

    <transition name="fade">
      <div class="grid-sudoku" v-if="isGameStarted && !showAnswer">

        <div v-for="(row, rowIndex) in sudokuMatrix" class="grid-row" :key="rowIndex">
          <div v-for="(cell, cellIndex) in row" class="grid-cell" :key="rowIndex + '_' + cellIndex">
              <input type="text" v-bind:key="cell.num" v-model="cell.num" class="grid-cell-editor"/>
          </div>
        </div>

      </div>
    </transition>

    <transition name="fade">
      <div v-if="showAnswer" class="answer">
        <img alt="resultGif" v-bind:src="require('../assets/success.gif')" class="answer-image" v-if="isValid"/>
        <img alt="resultGif" v-bind:src="require('../assets/fail.gif')" class="answer-image" v-else/>
      </div>
    </transition>

  </div>
</template>

<script>

import {isValidSudoku} from 'is-valid-sudoku'

export default {
  name: 'SimpleSudoku',
  data: () => ({

    sudokuMatrix: [],
    initializeGameText: "Start!",
    evaluateGameText: "Verify!",
    answerImage: "",
    isGameStarted: false,
    showAnswer: false,
    isValid: false
  }),
  methods: {

    initializeGame() {

      let defaultSudokuMatrix = [
        [{ num: 5 }, { num: 3 }, { num: 4 }, { num: 6 }, { num: 7 }, { num: 8 }, { num: 9 }, { num: 1 }, { num: 2 }],
        [{ num: 6 }, { num: 7 }, { num: 2 }, { num: 1 }, { num: 9 }, { num: 5 }, { num: 3 }, { num: 4 }, { num: 8 }],
        [{ num: 1 }, { num: 9 }, { num: 8 }, { num: 3 }, { num: 4 }, { num: 2 }, { num: 5 }, { num: 6 }, { num: 7 }],
        [{ num: 8 }, { num: 5 }, { num: 9 }, { num: 7 }, { num: 6 }, { num: 1 }, { num: 4 }, { num: 2 }, { num: 3 }],
        [{ num: 4 }, { num: 2 }, { num: 6 }, { num: 8 }, { num: 5 }, { num: 3 }, { num: 7 }, { num: 9 }, { num: 1 }],
        [{ num: 7 }, { num: 1 }, { num: 3 }, { num: 9 }, { num: 2 }, { num: 4 }, { num: 8 }, { num: 5 }, { num: 6 }],
        [{ num: 9 }, { num: 6 }, { num: 1 }, { num: 5 }, { num: 3 }, { num: 7 }, { num: 2 }, { num: 8 }, { num: 4 }],
        [{ num: 2 }, { num: 8 }, { num: 7 }, { num: 4 }, { num: 1 }, { num: 9 }, { num: 6 }, { num: 3 }, { num: 5 }],
        [{ num: 3 }, { num: 4 }, { num: 5 }, { num: 2 }, { num: 8 }, { num: 6 }, { num: 1 }, { num: 7 }, { num: 9 }]
      ];
      for (let i = 0; i < defaultSudokuMatrix.length; ++i) {
        for (let k = 0; k < 2; ++k) {
          let randomColumnIndex = Math.floor(Math.random() * defaultSudokuMatrix.length);
          defaultSudokuMatrix[i][randomColumnIndex].num = "";
        }
      }

      this.sudokuMatrix = defaultSudokuMatrix;
      this.initializeGameText = "Restart";
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
      if (isValidSudoku(this.transformMatrix(this.sudokuMatrix))) {

        this.showAnswer = true;
        this.isValid = true;
        this.isGameStarted = false;

        setTimeout(() => {
          this.showAnswer = false;
          this.isGameStarted = true;
        }, 4000);

      }
      else {

        this.isValid = false;
        this.showAnswer = true;
        this.isGameStarted = false;

        setTimeout(() => {
          this.showAnswer = false;
          this.isGameStarted = true;
        }, 4000);

      }

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

.empty-cell {
  color: aqua;
}

.grid-cell-editor {
  border: none;
  width: 20px;
  height: 20px;
  font-family: 'Dosis', sans-serif;
  font-weight: bold;
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

.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
