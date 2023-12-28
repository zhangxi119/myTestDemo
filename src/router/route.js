import AppLayout from '@/layout/AppLayout.vue';

export const routes = [
  {
    path: '/',
    name: '首页',
    redirect: '/welcome',
    component: AppLayout,
    children: [
      {
        path: '/welcome',
        name: '欢迎页',
        component: () => import(/* webpackChunkName: "welcome" */ '@/views/threePage/index.vue'),
      },
      {
        path: '/tableDemo',
        name: 'table表',
        component: () => import(/* webpackChunkName: "tableDemo" */ '@/views/tablePage/index.vue'),
      },
      {
        path: '/threeMap',
        name: '3D地图1',
        component: () => import(/* webpackChunkName: "threeMap" */ '@/views/threeMap/index.vue'),
      },
      {
        path: '/demo',
        name: '3D地图',
        component: () => import(/* webpackChunkName: "demo" */ '@/views/demo/index.vue'),
      },
    ],
  },
];
