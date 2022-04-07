export default [
  {
    path: '/',
    component: () => import('@/layouts/home/Index.vue'),
    children: [
      {
        path: '',
        name: 'Home',
        component: () => import('@/views/home/Home.vue'),
      },
    ],
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
  {
    path: '/404',
    name: '404',
    component: () => import('@/views/shared/404.vue'),
  },
]
