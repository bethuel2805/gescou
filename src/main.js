import { createApp } from 'vue'
import App from './App.vue'
import "./css/style.css"

import router from './routers/route'

const app = createApp(App)

app.use(router)

app.mount('#app')
