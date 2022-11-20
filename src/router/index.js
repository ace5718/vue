import { createRouter, createWebHistory } from "vue-router";
import StartPage from '@/components/StartPage';
import SelectPage from '@/components/SelectPage';
import SelectOnePage from '@/components/SelectOnePage';
import detailsCheckPage from '@/components/detailsCheckPage';
import eventControlPage from '@/components/eventControlPage';
import bedPage from '@/components/bedPage';
import envPage from '@/components/envPage';

const routes = [
    { path: '/', component: StartPage },
    { path: '/select', name: 'select', component: SelectPage },
    { path: '/SelectOne', name: 'SelectOne', component: SelectOnePage },
    { path: '/detailsCheck', name: 'detailsCheck', component: detailsCheckPage },
    { path: '/eventControl', name: 'eventControl', component: eventControlPage },
    { path: '/bed', name: 'bed', component: bedPage },
    { path: '/enviroment', name: 'enviroment', component: envPage }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router