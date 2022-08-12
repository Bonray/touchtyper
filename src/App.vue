<template>
  <the-header/>
  <router-view v-slot="{ Component }">
    <transition mode="out-in">
      <component :is="Component"></component>
    </transition>
  </router-view>
  <the-footer/>
</template>


<script>
import TheHeader from '@/components/TheHeader.vue';
import TheFooter from '@/components/TheFooter.vue';

export default {
  components: { TheHeader, TheFooter }
}
</script>

<style>
@import "@/assets/styles/style.css";
</style>
