import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home/index'
import GenericCounter from '@/components/generic-counter/index'
import SpecificCounter from '@/components/specific-counter/index'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'Home',
            component: Home
        },
        {
            path: '/generic',
            name: 'Generic Counter',
            component: GenericCounter
        },
        {
            path: '/specific',
            name: 'Specific Counter',
            component: SpecificCounter
        },
        {
            path: '/*',
            redirect: {
                name: 'Home'
            }
        }
    ]
})
