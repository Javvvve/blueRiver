import VueRouter from 'vue-router'
import login from '../views/login/login'

const router =new VueRouter({
    routes:[{
        path:'/',
        redirect:'/login',
    },{
        path:'/login',
        component:login
    }],
})

export default router;