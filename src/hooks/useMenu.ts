import { onBeforeMount, ref } from 'vue'
import type { RouteMeta, RouteRecordRaw } from 'vue-router'
import { menuRoutes } from '../routes/routes'

export interface MenuItem {
    name: string
    title: string
    icon?: string
    // 父级
    parents: string[]

    meta?: RouteMeta
    childrens: MenuItem[]
}
const useMenu = () => {
    const menuMap = ref<Record<string, MenuItem>>({})
    const menuItems = ref<MenuItem[]>([])

    // 将 menuRoutes 转换成 MenuItem[]
    const routesToMenus = (routes: RouteRecordRaw[] = [], partents: string[] = []): MenuItem[] => {
        const items: MenuItem[] = []
        routes.forEach(value => {
            if (value.meta?.hide) {
                return
            }
            if (!value.name) {
                throw 'route must have a name!'
            }
            if (menuMap.value.hasOwnProperty(value.name)) {
                throw 'route name must be unique!'
            }
            const item = {
                name: value.name.toString(),
                title: value.meta?.title ?? value.name.toString(),
                parents: partents,
                meta: value.meta,
                icon: value.meta?.icon,
                childrens: []
            }

            menuMap.value[item.name] = item

            items.push({
                ...item,
                childrens: routesToMenus(value.children, [...partents, item.name])
            })
        })
        return items
    }

    onBeforeMount(() => {
        menuItems.value = routesToMenus(menuRoutes)
    })

    return {
        menuMap,
        menuItems
    }
}

export default useMenu
