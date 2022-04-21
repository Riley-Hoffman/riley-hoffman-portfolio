import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Projects from '../views/Projects.vue'
import Skills from '../views/Skills.vue'
import PageNotFound from '../views/PageNotFound.vue'

const routes = [{
  path: '/',
  name: 'Home',
  component: Home
}, {
  path: '/about',
  name: 'About',
  component: About
}, {
  path: '/projects',
  name: 'Projects',
  component: Projects
}, {
  path: '/skills',
  name: 'Skills',
  component: Skills
}, {
  path: '/page-not-found',
  name: 'Page Not Found',
  component: PageNotFound
}, {
  path: '/:catchAll(.*)',
  redirect: '/page-not-found'
}]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
