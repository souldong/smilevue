import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'shoppingMall',
    component: () => import(/* webpackChunkName: "about" */ '../views/shoppingMall/index.vue')
  },
  {
    path: '/shoppingMall',
    name: 'shoppingMall',
    component: () => import(/* webpackChunkName: "about" */ '../views/shoppingMall/index.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
