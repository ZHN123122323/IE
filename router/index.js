import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'toHome',
        component: () => import('../views/toHome.vue')
    },

    {
        path: '/toFamily',
        name: 'toFamily',
        component: () => import('../views/toFamily.vue')
    },

    {
        path: '/toQuiz',
        name: 'toQuiz',
        component: () => import('../views/toQuiz.vue')
    }
]

const router = new VueRouter({
    mode: 'history',
    routes
})

router.afterEach((to,from,next) =>{
    window.scrollTo(0,0);
})

export default router