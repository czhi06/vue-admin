import { createRouter, createWebHistory } from 'vue-router';
const route = [
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/login/index.vue'),
  },
  {
    path: '/home',
    name: 'home',
    component: () => import('@/views/home/index.vue'),
  },
];
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: route,
});

export default router;
