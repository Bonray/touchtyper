import { createStore } from 'vuex';
import axios from 'axios';
import { API_URL } from '@/config';

export default createStore({
  state: {
    text: null,
    isLoading: false,
    isLoadingFailed: false,
    error: null,
    mistakesCount: 0,
    wpm: 0,
    accuracy: 0,
  },

  getters: {
    splittedText(state) {
      return state.text ? state.text.split('') : [];
    },
    numberOfWords(state) {
      return state.text ? state.text.split(' ').length : 0;
    }
  },

  mutations: {
    updateText(state, payload) {
      state.text = payload;
    }
  },

  actions: {
    async getText(context) {
      context.state.isLoading = true;
      context.state.isLoadingFailed = false;
      try {
        const { data } = await axios.get(API_URL, {
          params: {
            type: 'all-meat',
            sentences: 4,
          }
        });
        context.commit('updateText', ...data);
      } catch(err) {
        context.state.isLoadingFailed = true;
        context.state.error = err;
      } finally {
        context.state.isLoading = false;
      }
    }
  },
});
