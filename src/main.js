import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/styles/style.css'
import wb from './registerServiceWorker'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faFileArrowDown } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faFileArrowDown, faGithub, faLinkedin)

const app = createApp(App)

app.use(router)

app.component('font-awesome-icon', FontAwesomeIcon).mount('#app')

app.prototype.$workbox = wb
