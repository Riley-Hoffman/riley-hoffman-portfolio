import { createRouter, createWebHistory } from 'vue-router'
import PageNotFound from '../views/PageNotFound.vue'

export const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import(/* webpackChunkName: "home" */ '../views/Home.vue')

  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')

  },
  {
    path: '/projects',
    name: 'Projects',
    component: () => import(/* webpackChunkName: "projects" */ '../views/Projects.vue')

  },
  {
    path: '/skills',
    name: 'Skills',
    component: () => import(/* webpackChunkName: "skills" */ '../views/Skills.vue')

  },
  {
    path: '/page-not-found',
    name: 'Page Not Found',
    component: PageNotFound
  },
  {
    path: '/:catchAll(.*)',
    redirect: '/page-not-found'
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
