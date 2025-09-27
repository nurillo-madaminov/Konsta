import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import MerchView from '@/views/MerchView.vue'
import ReleasesView from '@/views/ReleasesView.vue'
import TourView from '@/views/TourView.vue'
import AboutView from '@/views/AboutView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/merch',
      name: 'merch',
      component: MerchView,
    },
    {
      path: '/releases',
      name: 'releases',
      component: ReleasesView,
    },
    {
      path: '/tour',
      name: 'tour',
      component: TourView,
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView,
    },

  ],
})

export default router
