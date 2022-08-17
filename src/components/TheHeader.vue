<template>
  <header class="header">
    <div class="header__container">
      <h1 class="heading--primary">
        <img class="header__logo" src="@/assets/img/logo.png" alt="TouchTyper Logo">
        TouchTyper
      </h1>
      <router-link class="btn btn--primary" :class="{ active: $route.name === 'home' }" :to="{ name: 'home' }">Home</router-link>
      <router-link class="btn btn--primary" :class="{ active: $route.name === 'trainer' }" :to="{ name: 'trainer' }">Start Test</router-link>
    </div>
  </header>
</template>