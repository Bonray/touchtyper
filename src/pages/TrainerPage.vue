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
          v-for="(char, idx) in splittedText" 
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
          <span class="trainer__item-stat"><span>{{ wpmRounded }}</span> WPM</span>
        </li>

        <li class="trainer__item">
          <span class="trainer__item-head">
            <svg class="trainer__item-icon">
              <use xlink:href="assets/img/sprite.svg#target"></use>
            </svg>
            Accuracy
          </span>
          <span class="trainer__item-stat"><span>{{ accuracy }}</span>%</span>
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
      isTestLaunched: false,
      timer: null,
    }
  },
  computed: {
    splittedText() {
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
    accuracy() {
      return this.$store.getters.accuracy;
    },
    wpm() {
      return this.$store.getters.wpm;
    },
    wpmRounded() {
      return Math.round(this.wpm);
    }
  },
  methods: {
    handleKeystroke(e) {
      // ignore non-character keys
      if (e.key.length > 1) return;
      
      // start the test
      if (!this.isTestLaunched) {
        clearInterval(this.timer);
        this.isTestLaunched = true;
        this.$store.commit('setTimestamp', new Date().getTime());
        this.timer = setInterval(() => {
          this.$store.dispatch('startTimer');
        }, 1000);
      }

      this.typedLetter = e.key;
      const expected = this.splittedText[this.currentPosition];

      this.validateCharacter(expected);
      this.checkTestFinish();
    },

    validateCharacter(character) {
      if (this.typedLetter === character) {
        if (this.typedLetter === ' ') this.$store.commit('incrementWordCount');
        this.currentPosition++;
        this.typedLetter = null;
        this.isPrevKeystrokeWrong = false;
      } else {
        if (!this.isPrevKeystrokeWrong) this.$store.commit('incrementMistakesCount');
        this.isPrevKeystrokeWrong = true;
      }
    },

    checkTestFinish() {
      if (this.currentPosition === this.splittedText.length) {
        clearInterval(this.timer);
        window.removeEventListener('keydown', this.handleKeystroke);
        this.$store.commit('updateResults', {
          wpm: this.wpm,
          accuracy: this.accuracy,
        });
        this.$router.push({ path: '/results' });
      }
    },
  },
  created() {
    this.$store.dispatch('getText');
    window.addEventListener('keydown', this.handleKeystroke);
  },
}
</script>
