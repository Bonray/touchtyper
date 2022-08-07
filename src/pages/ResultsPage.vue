<template>
  <section class="results">
    <div class="container results__container">
      <!-- <div class="results__desc"> -->
        <h2 class="results__heading">Well done!</h2>
        <ul class="results__list">
          <li class="results__item results__item--typing">
            <svg class="results__item-icon">
              <use xlink:href="assets/img/sprite.svg#speedometer-2"></use>
            </svg>
            <h3 class="results__item-heading">Typing speed:</h3>
            <p class="results__item-stat">
              <span>41.8</span> wpm
            </p>
          </li>

          <li class="results__item results__item--accuracy">
            <svg class="results__item-icon">
              <use xlink:href="assets/img/sprite.svg#target-2"></use>
            </svg>
            <h3 class="results__item-heading">Accuracy:</h3>
            <p class="results__item-stat">
              <span>94.8</span>%
            </p>
          </li>
        </ul>

        <p class="results__text">You did a very good job, and we hope that the results matched your expectations!<br>If not, you can consider this attempt as a warm-up;)<br>When you feel like taking one more shot, please go ahead and try again! We will always be happy to see you here!</p>
        <router-link class="btn btn--secondary" :to="{ name: 'trainer' }">Try again</router-link>
      <!-- </div> -->
    </div>
  </section>
</template>

<script>
export default {
  
}
</script>