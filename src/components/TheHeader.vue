<template>
  <header class="header">
    <div class="header__container">
      <h1 class="heading--primary">
        <img class="header__logo" src="android-chrome-512x512.png" alt="TouchTyper Logo">
        TouchTyper</h1>
      <div class="header__best">
        <span>Best Result:</span>  
        Speed: 75 WPM. Accuracy: 98%
      </div>
      <router-link class="btn" :to="{ name: 'trainer' }" v-if="$route.name !== 'trainer'">Start</router-link>
    </div>
  </header>
</template>

<script>
export default {
  
}
</script>