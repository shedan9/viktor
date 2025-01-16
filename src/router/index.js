import { createWebHistory, createRouter } from 'vue-router';

const Home = () => import('@/views/home/HomeIndex');
const Setting = () => import('@/views/setting/SettingIndex');

const routes = [
  { path: '/', component: Home },
  { path: '/setting', component: Setting },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
