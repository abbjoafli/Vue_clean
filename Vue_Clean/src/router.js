import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '*',
      redirect: '/home'
    },
    {
      path: '/about',
      name: 'About',
      component: () => import('./views/About.vue'),
    },
    {
      path: '/home',
      name: 'Hem',
      component: () => import('./views/Home.vue'),
      // meta: {
      //   requiresAuth: true
      // }
    },
   
  ]
})
//Om man vill ha autenticering (inlogg) ex med firebase
// router.beforeEach((to, from, next) => {
//   const currentUser = firebase.auth().currentUser
//   const requiresAuth = to.matched.some(record => record.meta.requiresAuth)
//   if (requiresAuth && !currentUser) next('/login?to=${to.path}')
//   else if (!requiresAuth && currentUser) next('/homeAdmin')
//   else next()
// })
export default router
