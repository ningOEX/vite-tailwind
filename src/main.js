import { createApp } from 'vue'
import "./assets/css/style.css"
import App from './App.vue'
import router from "./router"
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import 'element-plus/theme-chalk/dark/css-vars.css'

const app = createApp(App)

// 引用路由
app.use(router)
app.use(ElementPlus)
app.mount('#app')
