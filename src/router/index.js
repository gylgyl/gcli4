import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    children: [
      {
        path: '/son1',
        name: 'homes1',
        component: () => import('../views/HomeSon1.vue')
      },
      {
        path: '/son2',
        name: 'homes2',
        component: () => import('../views/HomeSon2.vue')
      }
    ],
    meta: {
      keepAlive: true
    }
  },
  {
    path: '/about/:id?',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/show/:id',
    name: 'HomeShow',
    component: () => import('../views/Show.vue')
  },
  {
    path: '/loginAndLogout',
    name: 'LoginAndLogout',
    component: () => import('../views/LoginAndLogout.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
