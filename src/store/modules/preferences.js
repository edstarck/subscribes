import Vue from "vue";
import preferencesApi from "@/api/preferences";

const state = {
  data: null,
  isLoading: false,
  error: false,
};

export const mutationsTypes = {
  getPreferencesStart: "[preferences] get preferences start",
  getPreferencesSuccess: "[preferences] get preferences success",
  getPreferencesFailure: "[preferences] get preferences failure",

  updatePreferenceStart: "[preferences] update preference start",
  updatePreferenceSuccess: "[preferences] update preference success",
  updatePreferenceFailure: "[preferences] update preference failure",

  deletePreferencesStart: "[preferences] delete preferences start",
  deletePreferencesSuccess: "[preferences] delete preferences success",
  deletePreferencesFailure: "[preferences] delete preferences failure",
};

export const actionsTypes = {
  getPreferences: "[preferences] Get preferences",
  updatePreference: "[preferences] Update preferences",
  updateAllPreferences: "[preferences] update all preferences",
};

export const getterTypes = {
  currentPreferences: "[preferences] currentPreferences",
};

const mutations = {
  [mutationsTypes.getPreferencesStart](state) {
    state.isLoading = true;
    state.data = null;
  },
  [mutationsTypes.getPreferencesSuccess](state, payload) {
    state.isLoading = false;
    state.data = payload;
  },
  [mutationsTypes.getPreferencesFailure](state) {
    state.isLoading = false;
  },

  [mutationsTypes.updatePreferenceStart]() {},
  [mutationsTypes.updatePreferenceSuccess](state, payload) {
    const index = state.data.findIndex((item) => item.site === payload.site);
    if (index !== -1) {
      state.data[index].subscribed = payload.subscribed;
    }
  },
  [mutationsTypes.updatePreferenceFailure]() {},

  [mutationsTypes.deletePreferencesStart]() {},
  [mutationsTypes.deletePreferencesSuccess](state, payload) {
    state.data.forEach((item, index) => {
      Vue.set(state.data, index, {
        ...item,
        subscribed: payload,
      });
    });
  },
  [mutationsTypes.deletePreferencesFailure]() {},
};

const actions = {
  [actionsTypes.getPreferences](context, { apiUrl }) {
    return new Promise((resolve) => {
      context.commit(mutationsTypes.getPreferencesStart);

      preferencesApi
        .getPreferences(apiUrl)
        .then((response) => {
          context.commit(mutationsTypes.getPreferencesSuccess, response.data);
          resolve(response.data);
        })
        .catch(() => {
          context.commit(mutationsTypes.getPreferencesFailure);
        });
    });
  },
  [actionsTypes.updatePreference](context, { preference }) {
    return new Promise((resolve) => {
      context.commit(mutationsTypes.updatePreferenceStart);

      Promise.resolve()
        .then(() => {
          context.commit(mutationsTypes.updatePreferenceSuccess, preference);
          resolve(preference);
        })
        .catch(() => {
          context.commit(mutationsTypes.updatePreferenceFailure);
        });
    });
  },
  [actionsTypes.updateAllPreferences](context, { subscribed }) {
    return new Promise((resolve) => {
      context.commit(mutationsTypes.deletePreferencesStart);

      Promise.resolve()
        .then(() => {
          context.commit(mutationsTypes.deletePreferencesSuccess, subscribed);
          resolve(state.data);
        })
        .catch(() => {
          context.commit(mutationsTypes.deletePreferencesFailure);
        });
    });
  },
};

const getters = {
  [getterTypes.currentPreferences]: (state) => state.data,
};

export default {
  state,
  mutations,
  actions,
  getters,
};
