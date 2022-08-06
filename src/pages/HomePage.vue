<template>
  <main class="main">
    <div class="trainer">
      <div class="trainer__container">
        <p class="trainer__text" v-if="isLoading">
          <base-loader/>
        </p>
        <p class="trainer__text" v-else-if="isLoadingFailed">
          Something went wrong! Text loading failed. Please, try again later.
        </p>
        <p class="trainer__text" v-else>
          <!-- <base-char v-for="(char, idx) in text" :key="idx" :char="char" :id="idx" :typed-letter="typedLetter" /> -->
          <span
            class="char"
            :class="{ 'current--default': isCurrent, 'current--error': isCurrentWrong, 'passed--right': isCurrentCorrect }"
            v-for="(char, idx) in text"
            :key="idx"
          >
            {{ char }}
          </span>
        </p>
        <ul class="trainer__list">
          <li class="trainer__item">
            <span class="trainer__item-head">
              <svg class="trainer__item-icon">
                <use xlink:href="assets/img/sprite.svg#speedometer"></use>
              </svg>
              Speed
            </span>
            <span class="trainer__item-stat"><span>0</span> WPM</span>
          </li>
          <li class="trainer__item">
            <span class="trainer__item-head">
              <svg class="trainer__item-icon">
                <use xlink:href="assets/img/sprite.svg#target"></use>
              </svg>
              Speed
            </span>
            <span class="trainer__item-stat"><span>100</span>%</span>
          </li>
        </ul>
      </div>
    </div>
  </main>
  <base-modal/>
</template>

<script>
import BaseModal from '@/components/BaseModal.vue';
import BaseLoader from '@/components/BaseLoader.vue';

export default {
  components: { BaseModal, BaseLoader },
  data() {
    return {
      typedLetter: null,
    }
  },
  computed: {
    text() {
      return this.$store.state.text.split('');
    },
    isLoading() {
      return this.$store.state.isLoading;
    },
    isLoadingFailed() {
      return this.$store.state.isLoadingFailed;
    },
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
  },
  methods: {
  },
  created() {
    this.$store.dispatch('getText');
  }
}
</script>
