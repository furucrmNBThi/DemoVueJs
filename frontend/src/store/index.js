import Vue from "vue";
import Vuex from "vuex";

import authModule from "./modules/auth";
import axios from "./modules/axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  modules: {
    axios: axios,
    auth: authModule
  },
  getters: {}
});
