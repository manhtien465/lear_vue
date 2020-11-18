import Vue from 'vue'
import VueRouter from 'vue-router'
import NavBar from '@/components/Navbar.vue'


Vue.use(VueRouter)
const routes=[
    {
        path:"/",
        name:"Home",
        components:{
            NavBar,
            default: () => import(/* webpackChunkName: "about" */ '../views/dashboard.vue')
            
        }
    }
]
const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
  })
  export default router