import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    auth: false,
    userId: null,
    userTrees: null,
    username: null
  },

  mutations: {
    initStore(state) {
      if (localStorage.getItem("userId")) {
        state.auth = true;
        state.userId = localStorage.getItem("userId");
        state.username = localStorage.getItem("username");
      }
    },

    setUserId(state, payload) {
      state.userId = payload;
      state.auth = true;
      localStorage.setItem("userId", state.userId);
    },
    setUsername(state, payload) {
      state.username = payload;
      localStorage.setItem("username", state.username);
    }
  },

  actions: {},

  getters: {
    getAuthStatus: state => state.auth,
    getUserId: state => state.userId,
    getUserTrees: state => state.userTrees,
    getUsername: state => state.username
  }
});
