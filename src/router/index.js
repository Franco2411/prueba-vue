import { createRouter, createWebHistory } from 'vue-router'
import LoginView from '../views/loginView.vue'
import homeView from '@/views/homeView.vue'
import aboutView from '@/views/aboutView.vue'
import { getToken } from '@/services/authService'

const routes = [
  { path: '/login', name: 'login', component: LoginView },
  { path: '/',
    name: 'home',
    component: homeView,
    beforeEnter: (to, from, next) => {
      if (getToken()) {
        next();
      } else {
        next('/login');
      }
    }
   },

  { path: '/about', name: 'about', component: aboutView },
  

  // Aquí agregarás otras rutas en el futuro, como la pantalla principal
  // { path: '/main', name: 'main', component: MainView },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
