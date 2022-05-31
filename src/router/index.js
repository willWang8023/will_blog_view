import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    {
        path: '/',
        component: () => import('@/components/myLogin'),
        meta: {title: 'hello world'}
    },
    {
        path: '/hello',
        component: () => import('@/components/HelloWorld'),
        meta: {title: 'hello world'}
    },
    {
        path: '/home',
        name: 'home',
        component: () => import('@/components/myHome'),
        meta: {title: 'hello world'}
    }
    // ,
    // {
    //     path: '/login',
    //     component: () => import('@/views/Login'),
    //     meta: {title: '登录'}
    // }
]

const router = createRouter({
    // hash模式
    // history: createWebHashHistory(),
    history: createWebHistory(),
    base: process.env.BASE_URL,
    routes: routes,
})

export default router
