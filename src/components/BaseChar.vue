<template>
  <span class="char" :class="{ 'current--default': isCurrent, 'current--error': isCurrentWrong, 'passed--right': isCurrentCorrect }">
    {{ char }}
  </span>
</template>

<script>
export default {
  props: ['char', 'id', 'typedLetter'],
  computed: {
    currentPosition() {
      return this.$store.state.currentPosition;
    },
    isCurrent() {
      return this.id === this.currentPosition;
    },
    isCurrentWrong() {
      return this.id === this.currentPosition && this.typedLetter && this.typedLetter !== this.char;
    },
    isCurrentCorrect() {
      if (this.currentPosition < this.id) return;
      return this.typedLetter === this.char;
    },
  }
}
</script>