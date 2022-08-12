import axios from 'axios';
import { API_URL, SENTENCES_NUM } from '@/config';

export default {
  async getText({ state, commit }) {
    state.isLoading = true;
    state.isLoadingFailed = false;
    commit('resetState');
    try {
      const { data } = await axios.get(API_URL, {
        params: {
          type: 'all-meat',
          sentences: SENTENCES_NUM,
        }
      });
      commit('updateText', ...data);
    } catch {
      state.isLoadingFailed = true;
    } finally {
      state.isLoading = false;
    }
  },
}