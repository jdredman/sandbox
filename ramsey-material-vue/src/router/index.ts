import { createRouter, createWebHistory } from 'vue-router'
import App from '../App.vue'
import ImplementationGuide from '../views/ImplementationGuide.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: App,
    },
    {
      path: '/implementation-guide',
      name: 'ImplementationGuide',
      component: ImplementationGuide,
    },
  ],
})

export default router
