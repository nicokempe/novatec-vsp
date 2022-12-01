import {createApp} from 'vue';
import App from './App.vue';
import router from './router';
import './assets/style/app.css';
import './scripts/darkMode';
import i18n from './i18n'
import VueAxios from "vue-axios";
import axios from 'axios'

const app = createApp(App);
app.use(i18n)
app.use(router)
app.use(VueAxios, axios)
app.mount('#app');
