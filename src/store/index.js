import { createStore } from 'vuex';
import axios from 'axios';
import { API_URL } from '@/config';

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

  getters: {
    splittedText(state) {
      return state.text ? state.text.split('') : [];
    },
    numberOfWords(state) {
      return state.text ? state.text.split(' ').length : 0;
    },
    wpm(state) {
      return state.time ? (state.wordCount / state.time * 60).toFixed(1) : 0;
    },
    accuracy(state, getters) {
      return getters.splittedText.length 
        ? ((getters.splittedText.length - state.mistakesCount) / getters.splittedText.length * 100).toFixed(1) 
        : 0;
    },
  },

  mutations: {
    updateText(state, payload) {
      state.text = payload;
    },
    incrementTime(state) {
      state.time++;
    },
    incrementWordCount(state) {
      state.wordCount++;
    },
    incrementMistakesCount(state) {
      state.mistakesCount++;
    },
    setTimestamp(state, payload) {
      state.timestamp = payload;
    },
    updateResults(state, payload) {
      state.results.push(payload);
    },
    resetState(state) {
      state.mistakesCount = 0;
      state.time = 0;
      state.timestamp = null;
      state.wordCount = 0;
    },
  },

  actions: {
    async getText(context) {
      context.state.isLoading = true;
      context.state.isLoadingFailed = false;
      context.commit('resetState');
      try {
        const { data } = await axios.get(API_URL, {
          params: {
            type: 'all-meat',
            sentences: 2,
          }
        });
        context.commit('updateText', ...data);
      } catch {
        context.state.isLoadingFailed = true;
      } finally {
        context.state.isLoading = false;
      }
    },
  },
});
