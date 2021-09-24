
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [ 
      { path: '/login', name:'Login', component: () => import('pages/login.vue') }
    ]
  },
  {
    path: '/start',
    name: 'StartPage',
    component: () => import('pages/start.vue')
  },
  {
    path: '/game',
    name: 'PageGame',
    component: () => import('pages/game.vue')
  },
  {
    path: '/statistics',
    name: 'PageStatistics',
    component: () => import('../pages/statistics.vue')
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
