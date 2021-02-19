import {SudokuGenerator} from "js-sudoku-generator";
import {isValidSudoku} from "is-valid-sudoku";

let state = {
    sudokuBoard: undefined,
    currentGame: [],
};
let actions = {
    async initGame({commit}) {
        SudokuGenerator.generate(2);
        let board = SudokuGenerator.generatedBoards[0];
        commit('setBoard', board);
    },
    solveGame({state, commit}) {
        let completeGrid = state.sudokuBoard.board;
        let game = [...state.currentGame];
        for (let i = 0; i < game.length; ++i) {
            for (let k = 0; k < game.length; ++k) {
                let obj = game[i][k];
                if (!obj.given) {
                    obj.num = completeGrid[i][k];
                }
            }
        }
        commit('setCurrentGame', game)
    }
};
let mutations = {
    setBoard(state, board) {
        state.sudokuBoard = board;
    },
    startGame(state, level) {
        let game = state.sudokuBoard.getSheet(level)
            .map(row => row.map(cell => {
                let given = !!cell;
                return {num: cell, given: given}
            }));
        state.currentGame = game;
    },
    setCurrentGame(state, game) {
        state.currentGame = game;
    }
};
let getters = {
    gameState: (state) => {
        let currentGameCopy = [...state.currentGame];
        let validatableGame = currentGameCopy.map(row => row.map(cell => cell.num));
        return isValidSudoku(validatableGame);
    }
};
let modules = {};


export default {
    namespaced: true,
    state,
    actions,
    mutations,
    getters,
    modules
}