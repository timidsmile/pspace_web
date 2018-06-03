import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import About from './views/About.vue'
import Register from './views/Register.vue'
import UserDetail from './views/UserDetail.vue'
import UserSetting from './views/UserSetting.vue'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/about',
            name: 'about',
            component: About
        },
        {
            path: '/register',
            name: 'register',
            component: Register
        },
        {
            path: '/userDetail',
            name: 'userDetail',
            component: UserDetail
        },
        {
            path: '/userSetting',
            name: 'userSetting',
            component: UserSetting
        }
    ]
})