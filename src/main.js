import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'





import Swal from 'sweetalert2';


createApp(App).use(router).mount('#app')

