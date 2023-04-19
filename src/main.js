import 'normalize.css' // css初始化
import './styles/index.scss'
import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import { setupProdMockServer } from './mockProdServer';
setupProdMockServer();

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.mount('#app')
