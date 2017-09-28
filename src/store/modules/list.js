const state = {
  mess1: true,
  mess2: false,
  mess3: false
}
const getters = {
  mes1: state => state.mess1,
  mes2: state => state.mess2,
  mes3: state => state.mess3
}
const mutations = {
  m1check (state) {
    state.mess1 = true
    state.mess2 = false
    state.mess3 = false
  },
  m2check (state) {
    state.mess1 = false
    state.mess2 = true
    state.mess3 = false
  },
  m3check (state) {
    state.mess1 = false
    state.mess2 = false
    state.mess3 = true
  }
}
const actions = {
  m1checked ({commit}) {
    commit('m1check')
  },
  m2checked ({commit}) {
    commit('m2check')
  },
  m3checked ({commit}) {
    commit('m3check')
  }
}
export default {
  state,
  getters,
  mutations,
  actions
}
