import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

const router = new Router({
  routes: [
    {
      path: "/",
      redirect: "/index"
    },
    {
      path: "/index",
      component: () => import("@/views/index/index"),
      redirect:'/index/find',
      children:[
        {
          path: 'my',
          component: () => import("@/views/index/music/my"),
          meta:{
            title: '我的'
          }
        },
        {
          path: 'find',
          component: () => import("@/views/index/music/find"),
          meta:{
            title: '发现'
          }
        },
        {
          path: 'cloud',
          component: () => import("@/views/index/music/cloud"),
          meta:{
            title: '云村'
          }
        }
      ]
    },
    {
      path: "/login",
      component: () => import("@/views/user/login"),
    }
    ,
    {
      path: "/register",
      component: () => import("@/views/user/register"),
    }
  ]
});
export default router;
