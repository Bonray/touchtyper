export default {
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
}