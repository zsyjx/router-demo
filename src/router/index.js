import { createRouter, createWebHashHistory } from 'vue-router'
//懒加载方式加载页面
const Home = () => import('./../pages/Home.vue')
const Course = () => import('./../pages/Course.vue')
const Friends = () => import('./../pages/Friends.vue')
const Study = () => import('./../pages/Study.vue')
const My = () => import('./../pages/My.vue')	

const routes = [
     /*通常第一个配置重定向 */
     { path: '/', redirect: '/home' },
     { path: '/home', component: Home },
     { path: '/course', component: Course },
     { path: '/friends', component: Friends },
     { path: '/study', component: Study },
     { path: '/my', component: My }
 
]
//3 创造路由对象
const router = createRouter({
    history: createWebHashHistory(),
    routes  //键值名字一样，使用简写
});
//4 导出以便vue中使用
export default router;