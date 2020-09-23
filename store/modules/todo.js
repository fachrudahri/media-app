import todo from '../../data/todo.json'

const state = {
  todos: todo.data,
  filter: []
}

const getters = {
  statusDone: (state) => {
  return state.todos.filter(n => n.done)
  }
}

const mutations = {
  MUT_CHANGESTATUS: (state) => {
    state.todos.filter(n => {
      if(n.done == true) {
        n.done = false
      }
    })
  }
}

const actions = {
  changeStatus: (context) => {
    context.commit('MUT_CHANGESTATUS')
  }
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
