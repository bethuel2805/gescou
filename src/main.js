import { createApp } from 'vue'
import App from './App.vue'
import "./css/style.css"

import {createRouter, createWebHistory } from 'vue-router'

import Login from "./views/LoginPage.vue"
import Dashboard from "./views/Dashboard.vue"

const routes = [
    {name:"Login", path:"/", component: Login},
    {name:"Dashboard", path:"/dashboard", component: Dashboard},
]

const router = createRouter({
    routes,
    history: createWebHistory()
})

const app = createApp(App)

app.use(router)
app.mount('#app')
