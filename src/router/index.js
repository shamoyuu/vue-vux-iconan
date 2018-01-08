import Vue from 'vue'
import Router from 'vue-router'
import routers from '@/router/routers'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'HelloWorld',
            component: routers.HelloWorld
        },
        {
            path: '/home',
            name: '首页',
            component: routers.Home
        }
    ]
})
