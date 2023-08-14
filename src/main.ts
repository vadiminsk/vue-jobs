import { createApp } from 'vue'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

import './index.css'
import App from './App.vue'

const app = createApp(App)

library.add(faSearch)
app.component('font-awesome-icon', FontAwesomeIcon).mount('#app')
