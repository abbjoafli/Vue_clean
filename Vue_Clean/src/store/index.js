import Vue from 'vue'
import Vuex from 'vuex'
import example from './example'

Vue.use(Vuex)

export default new Vuex.Store({
  store: {
    responsiveNav: false
  },
  modules: {
    example
  },
 
})