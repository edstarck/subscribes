const state = {
  progressBarWidth: {
    newValue: 0,
    oldValue: 0,
  },
};

export const mutationsTypes = {
  updateProgressBar: "[progressbar] update progressbar",
};

export const getterTypes = {
  getProgressBarWidth: "[progressbar] get progress bar width",
};

const mutations = {
  [mutationsTypes.updateProgressBar](state, { progress }) {
    state.progressBarWidth = { ...progress };
  },
};

const getters = {
  [getterTypes.getProgressBarWidth]: (state) => state.progressBarWidth,
};

export default {
  state,
  mutations,
  getters,
};
