const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export default {
  state: {
    user: {
      token: localStorage.getItem("accessToken"),
      summary: {}
    }
  },
  mutations: {
    [LOGIN_SUCCESS](state, data) {
      state.user.token = data.accessToken;
      localStorage.setItem("accessToken", data.accessToken);
    }
  },
  getters: {
    auth: state => {
      return state.user;
    }
  },
  actions: {
    auth_sign_in({ commit }, { username, password }) {
        console.log('username: ' + username);
        const user = this.dispatch('axios_post', {url: '', data: { username: username, password: password }});
        if(user != undefined && user != null){
            commit(LOGIN_SUCCESS, user);
        }else{
            alert('wrong username or password');
        }
    }
  }
};
