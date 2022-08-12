import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import VueKinesis from 'vue-kinesis'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'

import './assets/main.css'

library.add(faGithub, faInstagram, faTwitter)
const app = createApp(App)
const DEFAULT_TITLE = 'kavin.bharathi'
document.title = DEFAULT_TITLE

app.use(router)
app.component('font-awesome-icon', FontAwesomeIcon)
app.use(VueKinesis)

app.mount('#app')



