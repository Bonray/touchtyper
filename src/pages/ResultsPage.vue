<template>
  <main class="main">
    <section class="results">
      <div class="container results__container">
        <h2 class="results__heading">Well done!</h2>
        <ul class="results__list">
          <li class="results__item results__item--typing">
            <svg class="results__item-icon">
              <use xlink:href="@/assets/img/sprite.svg#speedometer-2"></use>
            </svg>
            <h3 class="results__item-heading">Typing speed:</h3>
            <p class="results__item-stat">
              <span>{{ wpm }}</span> wpm
            </p>
          </li>

          <li class="results__item results__item--accuracy">
            <svg class="results__item-icon">
              <use xlink:href="@/assets/img/sprite.svg#target-2"></use>
            </svg>
            <h3 class="results__item-heading">Accuracy:</h3>
            <p class="results__item-stat">
              <span>{{ accuracy }}</span>%
            </p>
          </li>
        </ul>

        <p class="results__text">You did a very good job, and we hope that the results matched your expectations!<br>If not, you can consider this attempt as a warm-up;)<br>When you feel like taking one more shot, please go ahead and try again! We will always be happy to see you here!</p>
        <router-link class="btn btn--secondary" :to="{ name: 'trainer' }">Try again</router-link>
      </div>
    </section>
  </main>
</template>

<script>
export default {
  computed: {
    wpm() {
      return this.$store.state.results.length ? this.$store.state.results[this.$store.state.results.length - 1].wpm : 0;
    },
    accuracy() {
      return this.$store.state.results.length ? this.$store.state.results[this.$store.state.results.length - 1].accuracy : 0;
    }
  }
}
</script>