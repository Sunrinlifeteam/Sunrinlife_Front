import { createApp } from 'vue'
import App from './App.vue'

import mitt from "mitt"
import router from './router.js'
//import store from "./store.js"

import "./index.css"

let emitter = mitt()
let app = createApp(App)

app.config.globalProperties.emitter = emitter

app.use(router).mount('#app')