import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/login',
    component: () => import('@/layouts/auth/Index.vue'),
    children: [
      {
        path: '',
        name: 'Login',
        component: () => import('@/views/auth/Login.vue'),
      },
      {
        path: '/register',
        name: 'Register',
        component: () => import('@/views/auth/Register.vue'),
      },

      {
        path: '/password-forgot',
        name: 'PasswordForgot',
        component: () => import('@/views/auth/PasswordForgot.vue'),
      },
      {
        path: '/password-reset/:hash',
        title: 'Reset Password',
        name: 'ResetPassword',
        component: () => import('@/views/auth/PasswordReset.vue'),
      },
    ],
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
})

export default router
