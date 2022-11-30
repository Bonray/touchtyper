<template>
  <main class="main">
    <div class="trainer">
      <div class="trainer__container" v-if="isMobile">
        <h2 class="heading--secondary">Viewport width of your device is not suitable for this test.<br>Please, try other devices.</h2>
      </div>
      
      <the-trainer v-else />
    </div>
  </main>
</template>

<script>
import TheTrainer from '@/components/TheTrainer.vue';

export default {
  components: { TheTrainer },
  data() {
    return {
      isMobile: false,
    }
  },
  methods: {
    handleViewportWidth() {
      this.isMobile = window.innerWidth > 900 ? false : true;
    },
  },
  created() {
    ['load', 'resize'].forEach((event) => window.addEventListener(event, this.handleViewportWidth));
  },
  beforeUnmount() {
    ['load', 'resize'].forEach((event) => window.removeEventListener(event, this.handleViewportWidth));
  }
}
</script>
