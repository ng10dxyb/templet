import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    isLoading: false,
    isShow:false,
    footerShow:false,
  },
  mutations: {
    updateLoadingStatus(state, payload) {
      state.isLoading = payload.isLoading
    },
    updateTopStatus(state, payload) {
      state.isShow = payload.isShow
    },
    updateFooterStatus(state, payload) {
      state.footerShow = payload.footerShow
    }
  },
  actions: {
    startLoading({ commit }) {
      commit('updateLoadingStatus', { isLoading: true })
    },
    stopLoading({ commit }) {
      commit('updateLoadingStatus', { isLoading: false })
    },
    topHide({ commit }) {
      commit('updateTopStatus', { isShow: false })
    },
    topShow({ commit }) {
      commit('updateTopStatus', { isShow: true })
    },
    footerShow({ commit }) {
      commit('updateFooterStatus', { footerShow: true })
    },
    footerHide({ commit }) {
      commit('updateFooterStatus', { footerShow: false })
    },
  }
})

export default store
