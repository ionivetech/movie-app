import { createApp } from 'vue'
import App from './App.vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import router from './router';
import store from './store';

// Import Main SCSS
import './assets/scss/app.scss';

// Import Tailwind
import './assets/css/tailwind.css'

createApp(App)
    .use(store)
    .use(router)
    .use(VueAxios, axios)
    .mount('#app')
