
let state = {
    maximum: 4,
    currentAmount: 4,
};
let actions = {};
let mutations = {
    reduceByOne(state) {
        state.currentAmount = state.currentAmount - 1;
    },
};
let getters = {
    isGameOver: (state) => {
        return state.currentAmount === 0;
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