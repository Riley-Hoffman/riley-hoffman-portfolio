import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/styles/style.css'
import wb from './registerServiceWorker'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import {
  faArrowDown,
  faArrowRightLong,
  faCircleHalfStroke,
  faFileArrowDown,
  faLeftRight,
  faMoon,
  faSun,
  faUniversalAccess,
  faWater,
  faXmark
} from '@fortawesome/free-solid-svg-icons'
import {
  faGithub,
  faLinkedin
} from '@fortawesome/free-brands-svg-icons'

library.add(
  faArrowDown,
  faArrowRightLong,
  faCircleHalfStroke,
  faFileArrowDown,
  faGithub,
  faLeftRight,
  faLinkedin,
  faMoon,
  faSun,
  faUniversalAccess,
  faWater,
  faXmark
)

const app = createApp(App)

app.use(router)

app.component('font-awesome-icon', FontAwesomeIcon).mount('#app')
app.provide('$workbox', wb)
