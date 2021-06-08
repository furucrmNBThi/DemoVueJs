import Vue from "vue";
import Vuex from "vuex";

import authModule from "./modules/auth";
import axiosModule from "./modules/axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  modules: {
    axios: axiosModule,
    auth: authModule
  },
  getters: {}
});
