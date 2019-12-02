import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: '',
    id: -1,
    repoName: ''
  },
  mutations: {
    setUser (state, id) {
      state.user = id
    },
    setId (state, id) {
      state.id = id
    },
    setRepoName (state, name) {
      state.repoName = name
    }
  },
  getters: {
    getUser (state) {
      return state.user
    },
    getId (state) {
      return state.id
    },
    getRepoName (state) {
      return state.repoName
    }
  },
  actions: {
  },
  modules: {
  }
})
