<template>
  <main class="main">
    <section class="home">
      <div class="home__container">
        <h2 class="home__heading">Welcome to TouchTyper!</h2>
        <p class="home__text">Test your touch typing abilities and find out how fast you actually are!<br>Our brand new trainer will help you with that!</p>
        <p class="home__cta">Are you ready to test your skills?</p>
        <router-link class="home__btn" :to="{ name: 'trainer' }">Start TouchTyper Test Now</router-link>
      </div>
    </section>
  </main>
</template>
