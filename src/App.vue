<template>
  <the-header/>
  <main class="main">
    <router-view/>
  </main>
  <the-footer/>
</template>


<script>
import TheHeader from '@/components/TheHeader.vue';
import TheFooter from '@/components/TheFooter.vue';

export default {
  components: { TheHeader, TheFooter }
}
</script>
