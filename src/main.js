import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/styles/style.css'
import wb from './registerServiceWorker'

const app = createApp(App)

app.use(router)

app.mount('#app')

app.prototype.$workbox = wb
