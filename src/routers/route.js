import {createRouter, createWebHistory} from 'vue-router'

import DashboardClient from '../views/client/Dashboard.vue'
import LoginPage from '../views/auths/LoginPage.vue'
import ReceiveCourrier from '../views/client/subpages/ReceiveCourrier.vue'
import SenderCourrier from '../views/client/subpages/SenderCourrier.vue'
import ArchiveCourrier from '../views/client/subpages/ArchiveCourrier.vue'
import CourrierArriver from '../views/client/subpages/CreateComeCourrier.vue'

import DashboardAdmin from "../views/admin/Dashboard_Admin.vue"
import AgentPage from "../views/admin/pages/Agent.vue"
import DirectionPage from "../views/admin/pages/Direction.vue"
import UserPage from "../views/admin/pages/User.vue"

const routes = [
    {name:"Login", path:"/", component: LoginPage},

    {name:"Dashboard", path:"/client/dashboard", component: DashboardClient, children: [
        {name:"Receiver", path:"/client/dashboard/receive_courrier", component: ReceiveCourrier},
        {name:"Sender", path:"/client/dashboard/sender_courrier", component: SenderCourrier},
        {name:"Archiver", path:"/client/dashboard/archive_courrier", component: ArchiveCourrier},
        {name:"CourrierArriver", path:"/client/dashboard/save_courrier_arriver", component: CourrierArriver},
    ]},

    {name:"AdminDashboard", path:"/admin/dashboard", component: DashboardAdmin, children:[
        {name:"Agent", path:"/admin/dashboard/agents", component: AgentPage},
        {name:"Direction", path:"/admin/dashboard/directions", component: DirectionPage},
        {name:"User", path:"/admin/dashboard/users", component: UserPage},
    ]}
]

const router = createRouter({
    routes,
    history: createWebHistory()
})

export default router