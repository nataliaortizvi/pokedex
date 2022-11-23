import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import './assets/main.scss'

const app = createApp(App)

app.use(createPinia())

app.mount('#app')
