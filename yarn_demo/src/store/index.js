import Vue from 'vue'
import Vuex from 'vuex'
import storeDemo from './modules/index'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    storeDemo // modules 集合
  }
})
