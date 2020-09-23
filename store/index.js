import Vue from 'vue'
import Vuex from 'vuex'
import todo from './modules/todo'

Vue.use(Vuex)
const createStore = () => {
  return new Vuex.Store({
    modules: {
      todo
    }
  })
}

export default createStore
