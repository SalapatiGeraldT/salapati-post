import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [

    {
      path: '/register',
      name: 'Register',
      component: () => import('../pages/Register.vue'),
      meta:{
        requiresAuth : false
      }
    },
    {
      path: '/',
      name: 'Login',
      component: () => import('../pages/Login.vue'),
      meta:{
        requiresAuth : false
      }
    },
    {
      path: '/dashboard',
      name: 'Dashboard',
      component: () => import('../pages/Dashboard.vue'),
      meta:{
        requiresAuth : true
      }
    },


    // {
    //   path: '/posts',
    //   name: 'IndexEmployee',
    //   component: () => import('../views/posts/IndexEmployee.vue')
    // },
    {
      path: '/posts/create',
      name: 'Create',
      component: () => import('../pages/Create.vue')
    },
    {
      path: '/posts/:id/edit',
      name: 'Edit',
      component: () => import('../pages/Edit.vue'),
      props: true,
    },




  ]
})

router.beforeEach((to,from)=>{
  if(to.meta.requiresAuth && !localStorage.getItem('token')){
    return{name:'Login'};
  }
  if(to.meta.requiresAuth == false && localStorage.getItem('token')){
    return{name:'Dashboard'};
  }
})

export default router
