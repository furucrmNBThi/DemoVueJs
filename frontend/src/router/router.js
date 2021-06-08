import Vue from 'vue';
import Router from 'vue-router';
import Login from '../components/auth/Login';

Vue.use(Router);

const routes = [
  {
    path: '/',
    name: 'login',
    component: Login,
    meta: {
      guest: true
    }
  }
];

export default routes;
