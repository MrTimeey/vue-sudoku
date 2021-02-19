import {SudokuGenerator} from "js-sudoku-generator";

let state = {
    sudokuBoard: {},
    difficulty: 0
};
let actions = {
    async initGame({ commit }) {
        SudokuGenerator.generate(2);
        let board = SudokuGenerator.generatedBoards[0];
        commit('setBoard', board);
    }
};
let mutations = {
    setBoard(state, board) {
        state.sudokuBoard = board;
    },
    setDifficulty(state, level) {
        state.difficulty = level
    }
};
let getters = {
    game: state => {
        return state.sudokuBoard.getSheet(state.difficulty);
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