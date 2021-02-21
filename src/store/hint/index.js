
let state = {
    maximum: 3,
    currentAmount: 3,
    hintActivated: false
};
let actions = {};
let mutations = {
    reduceByOne(state) {
        state.currentAmount = state.currentAmount - 1;
    },
    init(state) {
        state.currentAmount = state.maximum;
    },
    toogleHintMode(state) {
        if (state.currentAmount === 0) {
            state.hintActivated = false;
        } else {
            state.hintActivated = !state.hintActivated
        }
    }
};
let getters = {
    hintModeActivated: (state) => {
        if (state.currentAmount === 0) {
            state.hintActivated = false;
            return false;
        }
        return state.hintActivated;
    },
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