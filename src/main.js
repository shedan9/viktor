import { createApp } from 'vue';
import { createPinia } from 'pinia';
import router from './router';
import App from './App.vue';
import './styles/reset.css';
import 'element-plus/theme-chalk/dark/css-vars.css';

const pinia = createPinia();
const vueApp = createApp(App);

vueApp.use(pinia);
vueApp.use(router);
vueApp.mount('#app');
