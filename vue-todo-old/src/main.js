import { createApp } from 'vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faUserSecret } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import App from './App.vue'
library.add(faUserSecret)
App.component('font-awesome-icon', FontAwesomeIcon)
createApp(App).mount('#app')

