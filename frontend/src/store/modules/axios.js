import Vue from "vue";

export default {
  actions: {
    axios_post({ url, data }) {
      return Vue.axios
        .post(url, data)
        .then(
          res => {
            return res.data;
          },
          fail => {
            return fail.response;
          }
        );
    },
    axios_get({ commit },{ url, stageUpdate }) {
        Vue.axios
        .get(url)
        .then(resp => {
          commit(stageUpdate, resp.data);
        })
        .catch(err => {
          console.log("Something wrong while try to get data");
          console.log(err);
        });
      }
  }
};
