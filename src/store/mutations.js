export default {
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
}