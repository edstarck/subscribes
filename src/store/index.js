import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

import preferences from "@/store/modules/preferences";
import progressbar from "@/store/modules/progressbar";

export default new Vuex.Store({
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    preferences,
    progressbar,
  },
});
