import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    loginUser: {}, // 登录的用户
    token: '',
    count: 1
  },
  mutations: {
    // 使用方法
    /**
     * 1. this.$store.commit('addCount')
     */

    /**
     * 2.1 import { mapMutations } from 'vuex'
     * 2.2 ...mapMutations(['addCount'])  等于   this.$store.commit('addCount')
     */
    addCount(state) {
      state.count++
    },
    saveLoginUser(state, userObj) {
      state.loginUser = userObj
    },
    saveToken(state, token) {
      state.token = token
    }
  },
  actions: {
    // 使用方法
    /**
     * 1. this.$store.dispatch('addCountAction')
     */

    addCountAction({ commit }) {
      setTimeout(() => {
        commit('addCount')
      }, 3000)
    },
    loginUserAction({ commit }, obj) {
      commit('saveLoginUser', obj)
    },
    tokenAction({ commit }, token) {
      commit('saveToken', token)
    }
  },
  modules: {}
})

let obj2 = { obj: 1, ob: 3 }

function ff({ ob }, b) {
  console.log(ob, b)
}

ff(obj2, 2)
