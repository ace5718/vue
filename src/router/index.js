import { createRouter, createWebHistory } from "vue-router";
import StartPage from '@/components/StartPage'
import SelectPage from '@/components/SelectPage'

const routes = [
    { path: '/', component: StartPage },
    { path: '/select', name: 'select', component: SelectPage }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router