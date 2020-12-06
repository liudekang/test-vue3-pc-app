import { createRouter, createWebHistory,  RouteRecordRaw } from 'vue-router'
// import Vue from 'vue'
// import Home from '../views/Home.vue'
// import Contact from '../views/Contact.vue' 
const Home = ()=> import('../views/Home.vue')
const Contact = ()=> import('../views/Contact.vue')
 
console.log('555--', Home, Contact);
// Vue.use(VueRouter)
// const routerHistory = createWebHistory()
console.log('111--',createRouter, createWebHistory,  RouteRecordRaw);

const routes = [
    {
        path: '/',
        name: 'home',
        component: Home
    },
    {
        path: '/contact',
        name: 'contact',
        component: Contact
    },
    // {path: "*", redirect: "/home"}
]
 
// const router = new VueRouter({
//     mode: 'history',
//     routes // (缩写) 相当于 routes: routes
// })

const router = createRouter({  
    history: createWebHistory(),  
    routes
})

export default router 