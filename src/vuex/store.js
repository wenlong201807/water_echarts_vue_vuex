import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const state = {
  count: 6
};

const mutations = {
  add(state, n) {
    state.count += n;
  },
  reduce(state, n) {
    state.count -= n;
  }
};

const actions = {
  addAction(context) {
    context.commit('add', 10);
    setTimeout(() => {
      context.commit('reduce', 4);
    }, 3000);
    console.log('我比reduce先执行了');
  },
  reduceAction({ commit }) {
    commit('reduce', 3);
  }
};

const getters = {
  count: function(state) {
    return (state.count += 100);
  }
};

// const moduleA = {
//   state,
//   mutations,
//   getters,
//   actions
// };
export default new Vuex.Store({
  state,
  mutations,
  getters,
  actions
  // modules: {
  //   a: moduleA
  // }
});
