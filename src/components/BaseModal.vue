<template>
  <div class="overlay"></div>
  <div class="modal">
    <h2 class="heading--secondary">Attention!</h2>
    <p class="modal__text">Please, change your keyboard layout to English.</p>
    <button class="btn btn--primary modal__btn" @click="closeModal">Got it</button>
  </div>
</template>

<script>
export default {
  emits: ['close-modal'],
  methods: {
    closeModal() {
      this.$emit('close-modal');
    }
  }
}
</script>