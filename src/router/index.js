import Vue from 'vue'
import VueRouter from 'vue-router'
import paths from './paths'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: paths.concat([{ path: '*', redirect: '404' }]),
})

export default router
