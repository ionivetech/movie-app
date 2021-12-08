import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import router from './router';

// Import Main SCSS
import './assets/scss/app.scss';

// Import Tailwind
import './assets/css/tailwind.css'

createApp(App)
    .use(createPinia())
    .use(router)
    .use(VueAxios, axios)
    .mount('#app')
