import { createWebHistory, createRouter } from 'vue-router';

const Home = () => import('@/views/home/HomeIndex');
const Setting = () => import('@/views/setting/SettingIndex');
const NotFound = () => import('@/views/404/NotFound');

const routes = [
  { name: 'Home', path: '/', component: Home },
  { name: 'Setting', path: '/setting', component: Setting },
  { name: 'NotFound', path: '/:pathMatch(.*)*', component: NotFound },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
