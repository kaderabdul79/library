import { createRouter, createWebHistory } from 'vue-router'
// backend route
import dashboard from "../views/backend/dashboard.vue"
import admin from "../views/backend/admin.vue"
import student from "../views/backend/student.vue"
import management from "../views/backend/management.vue"

// frontend route
import login from "../views/frontend/login.vue"
import signup from "../views/frontend/signup.vue"
import portfolio from "../views/frontend/portfolio.vue"
import authLayout from "../views/frontend/authLayout.vue"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/dashboard',
      name: 'dashboard',
      component: dashboard
    },
    {
      path: '/admin',
      name: 'admin',
      component: admin
    },
    {
      path: '/management',
      name: 'management',
      component: management
    },
    {
      path: '/auth',
      component: authLayout,
      children: [
        {
          path: '/login',
          name: 'login',
          component: login
        },
        {
          path: '/signup',
          name: 'signup',
          component: signup
        }
      ],
    },
    {
      path: '/student',
      name: 'student',
      component: student
    },
    // {
    //   path: '/login',
    //   name: 'login',
    //   component: login
    // },
    // {
    //   path: '/signup',
    //   name: 'signup',
    //   component: signup
    // },
    {
      path: '/portfolio',
      name: 'portfolio',
      component: portfolio
    }
  ]
})

export default router
