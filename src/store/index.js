import Vue from 'vue'
import Vuex from 'vuex'
import game from './game'
import life from './life'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        isLoading: false,
    },
    mutations: {
        setLoading(state, newValue) {
            state.isLoading = newValue
        },
    },
    getters: {},
    actions: {},
    modules: {game, life}
})
