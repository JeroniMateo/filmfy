import 'bootstrap/dist/css/bootstrap.min.css'

import { createApp } from 'vue'
import App from './App.vue'

import router from './router'
import store from './store'

// Style imports
import 'bootstrap/dist/js/bootstrap.min'
import './css/styles.css'

createApp(App).use(store).use(router).mount('#app')
