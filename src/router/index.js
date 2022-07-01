import { createRouter, createWebHistory } from 'vue-router'
// import HomeView from '../views/HomeView.vue'
import dashboard from "../views/backend/dashboard.vue"
import login from "../views/frontend/login.vue"


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'dashboard',
      component: dashboard
    },
    {
      path: '/login',
      name: 'login',
      component: login
    }
  ]
})

export default router
