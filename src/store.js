import Vue from 'vue'
import Vuex from 'vuex'
import config from '@/services/config'

Vue.use(Vuex)

export default new Vuex.Store({
  state: config
})