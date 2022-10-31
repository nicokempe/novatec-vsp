import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import VueI18n from 'vue-i18n';
import './assets/style/app.css';

createApp(App).use(router).use(VueI18n).mount('#app');
