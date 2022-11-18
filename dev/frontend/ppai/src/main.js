import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import VueAxios from 'vue-axios'
import axios from 'axios'
import Vuetify from "vuetify";
// import 'vuetify/dist/vuetify.min.css'

var baseURL = 'http://127.0.0.1:8000/api/v1'

axios.defaults.baseURL = baseURL;
const app = createApp(App)

app.use(Vuetify)
app.use(createPinia())
app.use(router)
app.use(VueAxios, axios) 

app.mount('#app')
