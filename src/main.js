import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import VeeValidatePlugin from "./includes/validation";

import App from './App.vue'
import router from './router'


import "./assets/base.css"
import "./assets/main.css"

const app = createApp(App)

// register plugins
app.use(createPinia())
app.use(router)
app.use(VeeValidatePlugin)

app.mount('#app')
