<template>
  <section class="home">
    <div class="container home__container">
      <h2 class="home__heading">Welcome to TouchTyper!</h2>
      <p class="home__text">Test your touch typing abilities and find out how fast you actually are!<br>Our brand new trainer will help you with that!</p>
      <p class="home__cta">Please note that the timer will start as soon as you hit any key on your keyboard!</p>
      <router-link class="btn btn--secondary" :to="{ name: 'trainer' }">Start Now</router-link>
    </div>
  </section>
</template>
