<template>
  <div class="trainer">
    <div class="trainer__container">
      <p class="trainer__text" v-if="isLoading">
        <base-loader/>
      </p>

      <p class="trainer__text" v-else-if="isLoadingFailed">
        Something went wrong! Text loading failed. Please, try again later.
      </p>

      <p class="trainer__text" v-else>
        <base-char
          v-for="(char, idx) in text" 
          :key="idx" 
          :char="char" 
          :idx="idx" 
          :typed-letter="typedLetter"
          :current-position="currentPosition"
        />
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
  <base-modal v-if="isModalOpen"/>
</template>

<script>
import BaseModal from '@/components/BaseModal.vue';
import BaseLoader from '@/components/BaseLoader.vue';
import BaseChar from '@/components/BaseChar.vue';

export default {
  components: { BaseModal, BaseLoader, BaseChar },
  data() {
    return {
      currentPosition: 0,
      typedLetter: null,
      isPrevKeystrokeWrong: false,
      isModalOpen: false,
      isGameLaunched: false,
      timestamp: null,
    }
  },
  computed: {
    text() {
      return this.$store.getters.splittedText;
    },
    numberOfWords() {
      return this.$store.getters.numberOfWords;
    },
    isLoading() {
      return this.$store.state.isLoading;
    },
    isLoadingFailed() {
      return this.$store.state.isLoadingFailed;
    },
  },
  methods: {
    handleKeystroke(e) {
      if (e.key.length > 1) return;                         // ignore non-character keys
      if (!this.isGameLaunched) {                           // start the game
        this.isGameLaunched = true;
        this.timestamp = new Date().getTime();
      }

      this.typedLetter = e.key;                             // pressed key
      const expected = this.text[this.currentPosition];     // expected key

      if (this.typedLetter === expected) {                  // if the keys match then move on to the next character
        this.currentPosition++;
        this.typedLetter = null;
        this.isPrevKeystrokeWrong = false;
      } else {                                              // else increase the mistakes counter if the previous keystroke was not wrong
        if (!this.isPrevKeystrokeWrong) this.$store.state.mistakesCount++;
        this.isPrevKeystrokeWrong = true;
      }
    },
    checkTestFinish() {
      if (this.currentPosition === this.text.length - 1) {
        this.$router.push({ path: '/results' });
      }
    },
  },
  created() {
    this.$store.dispatch('getText');
    window.addEventListener('keydown', this.handleKeystroke);
  }
}
</script>
