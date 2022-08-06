import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '@/pages/HomePage.vue';
import TrainerPage from '@/pages/TrainerPage.vue';

const routes = [
  { path: '/', name: 'home', component: HomePage },
  { path: '/trainer', name: 'trainer', component: TrainerPage },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
