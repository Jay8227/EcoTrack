import { createRouter, createWebHistory } from 'vue-router'

// Import your components (✅ corrected paths)
import CarbonCalculator from './components/CarbonCalculator.vue'
import About from './components/About.vue'
import Contact from './components/Contact.vue'

// Simple Home component (you can replace with your own)
const Home = {
  template: `
    <div>
      <h2>Welcome</h2>
      <p>This is the home page of your app.</p>
    </div>
  `
}

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/dashboard', name: 'Dashboard', component: CarbonCalculator },
  { path: '/about', name: 'About', component: About },
  { path: '/contact', name: 'Contact', component: Contact }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
