import dataMessage from '../../api/index'

const state = {
  all: [],
  list1: [],
  list2: [],
  list3: []
}

const getters = {
  allMessages: state => state.all,
  message1: state => state.list1,
  message2: state => state.list2,
  message3: state => state.list3
}

const mutations = {
  receiveMessages(state, {messages}) { // 刷新
    state.all = messages
  },
  shaiXuan(state) {
    for (var i = 0; i < state.all.length; i++) {
      // const record = state.all.find(item => item.threadID === state.all[i].threadID)
      if (state.all[i].threadID === 't_1') {
        state.list1.push(state.all[i])
      }
      if (state.all[i].threadID === 't_2') {
        state.list2.push(state.all[i])
      }
      if (state.all[i].threadID === 't_3') {
        state.list3.push(state.all[i])
      } else {
        console.log(404)
        // state.list.push(record.id)
      }
    }
  },
  pushMes1(state, {name, contentss, time, threadName}) {
    state.list1.push({
      authorName: name,
      text: contentss,
      timestamp: time,
      threadName: threadName
    })
  },
  pushMes2(state, {name, contentss, time, threadName}) {
    state.list2.push({
      authorName: name,
      text: contentss,
      timestamp: time,
      threadName: threadName
    })
  },
  pushMes3(state, {name, contentss, time, threadName}) {
    state.list3.push({
      authorName: name,
      text: contentss,
      timestamp: time,
      threadName: threadName
    })
  }

}

const actions = {
  getMessages ({commit}) {
    dataMessage.getAllMessages((messages) => {
      commit('receiveMessages', {messages})
      commit('shaiXuan')
    })
  },
  pushMes1 ({commit}, {name, contentss, time, threadName}) {
    commit('pushMes1', {name, contentss, time, threadName})
  },
  pushMes2 ({commit}, {name, contentss, time, threadName}) {
    commit('pushMes2', {name, contentss, time, threadName})
  },
  pushMes3 ({commit}, {name, contentss, time, threadName}) {
    commit('pushMes3', {name, contentss, time, threadName})
  }
}
export default {
  state,
  getters,
  mutations,
  actions
}
