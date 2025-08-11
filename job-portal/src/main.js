import { createApp } from 'vue'
import './assets/main.css'
import App from './App.vue'
import router from './router'
import Vue3Toastify from 'vue3-toastify';

const app = createApp(App)

app.use(router)
app.use(Vue3Toastify, {
    autoClose: 3000,
    theme: 'colored',
    transition: 'slide',
    position: 'top-right',
    hideProgressBar: false,
})

app.mount('#app');
