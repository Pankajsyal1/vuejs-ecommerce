import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import "bootstrap/dist/js/bootstrap.bundle";
import "bootstrap/dist/css/bootstrap.min.css";
import "@/assets/css/style.scss"

createApp(App).use(router).mount('#app')
