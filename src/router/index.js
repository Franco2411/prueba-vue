import { createRouter, createWebHistory } from 'vue-router'
import LoginView from '../views/loginView.vue'
import homeView from '@/views/homeView.vue'

const routes = [
  { path: '/login', name: 'login', component: LoginView },
  { path: '/', name: 'home', component: homeView },

  // Aquí agregarás otras rutas en el futuro, como la pantalla principal
  // { path: '/main', name: 'main', component: MainView },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
