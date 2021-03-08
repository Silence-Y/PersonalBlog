import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    // 被选中的标签
    activeTag: ''
  },
  mutations: {
    changeTag(state, activeTag) {
      state.activeTag = activeTag;
    },
  },
  actions: {
    changeTag({
      commit
    }, activeTag) {
      commit('changeTag', activeTag)
    }
  }
})
