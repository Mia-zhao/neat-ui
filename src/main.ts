import './lib/neat-style.scss'
import './index.scss'
import { createApp } from 'vue'
import App from './App.vue'
import { router } from './router'
import i18n from './i18n'
import 'github-markdown-css'

const app = createApp(App)
app.use(router)
app.use(i18n)
app.mount('#app')