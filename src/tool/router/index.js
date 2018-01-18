import Vue from 'vue'
import Router from 'vue-router'
import routers from '@/tool/router/main-routers'

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            redirect: '/home'
        },
        {
            path: '/home',
            name: routers.Tab1Name,
            component: routers.Tab1
        },
        {
            path: '/news',
            name: routers.Tab2Name,
            component: routers.Tab2
        },
        {
            path: '/classify',
            name: routers.Tab3Name,
            component: routers.Tab3
        },
        {
            path: '/personal',
            name: routers.Tab4Name,
            component: routers.Tab4
        }
    ]
});
