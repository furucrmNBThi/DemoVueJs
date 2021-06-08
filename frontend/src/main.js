import Vue from 'vue';
import App from './App';
import store from "./store";
import axios from "axios";
import VueAxios from "vue-axios";
import router from './router/index';
import { ValidationObserver, ValidationProvider, extend } from 'vee-validate';
import * as rules from 'vee-validate/dist/rules';
import BootstrapVue from 'bootstrap-vue';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

Vue.config.productionTip = false;

Object.keys(rules).forEach(rule => {
  extend(rule, rules[rule]);
});

Vue.use(BootstrapVue);
Vue.use(VueAxios, axios);
Vue.component('ValidationObserver', ValidationObserver);
Vue.component('ValidationProvider', ValidationProvider);

axios.defaults.baseURL = 'http://localhost:8081/api';
// axios.defaults.baseURL = 'http://45.76.180.205:8081/api';

axios.defaults.useCredentails = true;
axios.defaults.headers = {
  "Access-Control-Allow-Origin": "*"
};

Vue.axios.interceptors.request.use(
  function(config) {
    const token = store.getters.auth.token;
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  function(err) {
    return Promise.reject(err.response.data);
  }
);


new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
