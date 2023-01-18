import { createApp } from 'vue'
import pinia from './stores'
import router from './routes'
import installIcons from './icon'
import 'element-plus/theme-chalk/dark/css-vars.css'
import './styles/index.scss'
import App from './App.vue'

const app = createApp(App)

app.use(pinia)
app.use(router)

// 注册一些全局使用的图标
installIcons(app)

app.mount('body')
