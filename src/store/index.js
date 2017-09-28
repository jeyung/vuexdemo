import Vue from 'vue'
import Vuex from 'vuex'
// import * as actions from './actions'
// import * as getters from './getters'
import messages from './modules/message'
import list from './modules/list'

Vue.use(Vuex)
export default new Vuex.Store({
  modules: {
    messages,
    list
  }
})
