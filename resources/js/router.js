import {createRouter, createWebHistory} from "vue-router";
import Index from "../js/components/Fruit/Index.vue";


const routes = [
    {path: '/fruits', name: 'fruit.index', component: () => Index},
    {path: '/users/login', name: 'user.login', component: () => import('./components/User/Login.vue')},
    {path: '/users/registration', name: 'user.registration', component: () => import('./components/User/Registration.vue')},
    {path: '/users/personal', name: 'user.personal', component: () => import('./components/User/Personal.vue')},
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router


