import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '@/pages/HomePage.vue';
import TrainerPage from '@/pages/TrainerPage.vue';
import ResultsPage from '@/pages/ResultsPage.vue';
import NotFoundPage from '@/pages/NotFoundPage.vue';

const routes = [
  { path: '/', name: 'home', component: HomePage },
  { path: '/trainer', name: 'trainer', component: TrainerPage },
  { path: '/results', name: 'results', component: ResultsPage },
  { path: '/:notFound(.*)*', name: 'not-found', component: NotFoundPage },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
