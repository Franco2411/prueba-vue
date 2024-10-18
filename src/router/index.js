import { createRouter, createWebHistory } from 'vue-router'
import LoginView from '../views/loginView.vue'
import homeView from '@/views/homeView.vue'
import aboutView from '@/views/aboutView.vue'

const routes = [
  { path: '/login', name: 'login', component: LoginView },
  { path: '/', name: 'home', component: homeView },
  { path: '/about', name: 'about', component: aboutView },
  

  // Aquí agregarás otras rutas en el futuro, como la pantalla principal
  // { path: '/main', name: 'main', component: MainView },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
