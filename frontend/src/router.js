import { createRouter, createWebHistory } from 'vue-router'

import CarbonCalculator from './components/CarbonCalculator.vue'
import About from './components/About.vue'
import Contact from './components/Contact.vue'

const routes = [
  { path: '/', redirect: '/dashboard' },
  { path: '/dashboard', name: 'Dashboard', component: CarbonCalculator },
  { path: '/about', name: 'About', component: About },
  { path: '/contact', name: 'Contact', component: Contact }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
