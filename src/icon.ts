import { House, Tickets, Memo, Document, Edit } from '@element-plus/icons-vue'
import { App } from 'vue'

const icons = [House, Tickets, Memo, Document, Edit]

// 安装一些图标
const installIcons = (app: App) => {
    icons.forEach(value => {
        app.component(value.name, value)
    })
}

export default installIcons
