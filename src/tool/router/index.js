import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/main/Home'
import News from '@/components/main/News'
import Classify from '@/components/main/Classify'
import Personal from '@/components/main/Personal'

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            redirect: '/home'
        },
        {
            path: '/home',
            name: 'home',
            component: Home
        },
        {
            path: '/news',
            name: 'news',
            component: News
        },
        {
            path: '/classify',
            name: 'classify',
            component: Classify
        },
        {
            path: '/personal',
            name: 'personal',
            component: Personal
        }
    ]
});
