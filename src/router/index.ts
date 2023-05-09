import { createRouter, createWebHistory, Router, RouteRecordRaw } from 'vue-router';

import Home from '@/views/Home.vue';

const routes: Array<RouteRecordRaw> = [
  {
    component: Home,
    path: '/',
    name: 'Home',
    meta: { title: 'Home' },
  },
];

const router: Router = createRouter({
  history: createWebHistory('/vuejs'),
  routes,
});

router.afterEach((to) => {
  const baseTitle = '';
  document.title = `${baseTitle} ${to.meta.title}`;
});

export default router;
