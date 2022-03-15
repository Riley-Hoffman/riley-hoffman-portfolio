import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/styles/style.css'
import wb from './registerServiceWorker'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faWater, faXmark, faFileArrowDown, faLeftRight, faUniversalAccess, faArrowRightLong, faArrowDown } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'

library.add(faWater, faXmark, faFileArrowDown, faLeftRight, faUniversalAccess, faArrowRightLong, faGithub, faLinkedin, faArrowDown)

const app = createApp(App)

app.use(router)

app.component('font-awesome-icon', FontAwesomeIcon).mount('#app')
app.provide('$workbox', wb)
