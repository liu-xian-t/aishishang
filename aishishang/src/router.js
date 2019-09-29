import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path:"/home",
      name:"home",
      component:()=>import("./views/home.vue")
    },
    {
      path:"/datetill/:id",
      name:"datetill",
      component:()=>import("./views/datetill.vue")
    },
    {
      path:"/shopcar",
      name:"shopcar",
      component:()=>import("./views/shopcar.vue")
    },
    {
      path:"*", 
      redirect:"/home",
    }
  ]
})
