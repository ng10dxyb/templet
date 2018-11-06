
import demoRoutes from 'ui/router.js'
export default [
  ...demoRoutes,
  {
    path: '/',
    name: 'elean-home',
    component: () => import('@/home/home.vue'),
    meta: {
      title: '首页',
    },
    children: [
      {
        path: '/',
        name: 'elean-library',
        component: () => import('@/library/library.vue'),
      },
      {
        path: '/print',
        name: 'elean-print',
        component: () => import('@/print/print.vue'),
      },
      {
        path: '/mine',
        name: 'elean-mine',
        component: () => import('@/mine/mine.vue'),
      },
    ]
  },
]
