/*
 * @Author: Lee
 * @Date: 2022-06-11 00:56:02
 * @LastEditors: Lee
 * @LastEditTime: 2022-06-11 07:11:50
 * @Description:
 */
import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    redirect: "/examples1"
  },
  {
    path: '/examples1',
    name: 'examples1',
    component: () => import('../pages/examples1/index.vue'),
    meta: {
      title: '大转盘',
    },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

// 导航守卫
router.beforeEach((to, from, next) => {
  if (to.path !== '/favicon.icon') {
    document.title = to.meta.title ? (to.meta.title as string) : '';
    next();
  }
});

export default router;
