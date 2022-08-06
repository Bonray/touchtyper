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
  </main>
  <base-modal/>
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
    }
  },
  computed: {
    text() {
      return this.$store.getters.splittedText;
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
      if (e.key === 'Shift' || e.key === 'CapsLock') return;

      this.typedLetter = e.key;
      const expected = this.text[this.currentPosition];

      if (this.typedLetter === expected) {
        this.currentPosition++;
        this.typedLetter = null;
        this.isPrevKeystrokeWrong = false;
      } else {
        if (!this.isPrevKeystrokeWrong) this.$store.state.mistakesCount++;
        this.isPrevKeystrokeWrong = true;
      }
    }
  },
  created() {
    this.$store.dispatch('getText');
    window.addEventListener('keydown', this.handleKeystroke);
  }
}
</script>
