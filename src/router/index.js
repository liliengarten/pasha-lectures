import { createRouter, createWebHistory } from 'vue-router'

import HomePage from "@/pages/HomePage.vue";
import AboutPage from "@/pages/AboutPage.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { name: 'home', path: '/', component: HomePage },
    { name: 'about', path: '/about', component: () => import( '@/pages/AboutPage.vue') },
    { name: 'posts', path: '/posts/:id', component: () => import( '@/pages/PostsPage.vue') },
  ],
})

export default router
