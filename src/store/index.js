import { createStore } from 'vuex';
import getters from './getters';
import mutations from './mutations';
import actions from './actions';

export default createStore({
  state: {
    text: null,
    isLoading: false,
    isLoadingFailed: false,
    wordCount: 0,
    mistakesCount: 0,
    timestamp: null,
    time: 0,
    results: [],
  },
  getters,
  mutations,
  actions,
});
