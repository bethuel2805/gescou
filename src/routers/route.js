import {createRouter, createWebHistory} from 'vue-router'

import Dashboard from '../views/Dashboard.vue'
import LoginPage from '../views/LoginPage.vue'
import ReceiveCourrier from '../views/subpages/ReceiveCourrier.vue'
import SenderCourrier from '../views/subpages/SenderCourrier.vue'
import ArchiveCourrier from '../views/subpages/ArchiveCourrier.vue'


const routes = [
    {name:"Login", path:"/", component: LoginPage},

    {name:"Dashboard", path:"/dashboard", component: Dashboard, children: [
        {name:"Receiver", path:"/dashboard/receive_courrier", component: ReceiveCourrier},
        {name:"Sender", path:"/dashboard/sender_courrier", component: SenderCourrier},
        {name:"Archiver", path:"/dashboard/archive_courrier", component: ArchiveCourrier},
    ]},
]

const router = createRouter({
    routes,
    history: createWebHistory()
})

export default router