import type { RouteRecordRaw } from 'vue-router'
import { formatFlatteningRoutes } from './util'

// 布局
const IndexLayout = () => import('../layout/index.vue')
const BlankLayout = () => import('../layout/blank.vue')
// 页面
const NotFoundView = () => import('../views/404/index.vue')
const LoginView = () => import('../views/login/index.vue')

const DashboardView = () => import('../views/dashboard/index.vue')
const XFormView = () => import('../views/xform/index.vue')
const XTableView = () => import('../views/table-manage/xtable/index.vue')
const VTableView = () => import('../views/table-manage/vtable/index.vue')

/**
 * Note: 会根据menuRoutes自动生成左侧的菜单列表
 * 1.会取menuRoutes列表中的第一个元素作为首页
 */
export const menuRoutes: RouteRecordRaw[] = [
    {
        name: 'dashboard',
        path: '/dashboard',
        component: DashboardView,
        meta: {
            title: '仪表板',
            icon: 'House'
        }
    },
    {
        name: 'table-manage',
        path: '',
        redirect: '/xtable',
        component: BlankLayout,
        meta: {
            title: '表格管理',
            icon: 'Memo'
        },
        children: [
            {
                name: 'xtable',
                path: '/xtable',
                component: XTableView,
                meta: {
                    title: '表格',
                    icon: 'Document'
                }
            },
            {
                name: 'vtable',
                path: '/vtable',
                component: VTableView,
                meta: {
                    title: '虚拟化表格',
                    icon: 'Tickets'
                }
            }
        ]
    },
    {
        name: 'xform',
        path: '/xform',
        component: XFormView,
        meta: {
            title: '表单',
            icon: 'Edit'
        }
    },
]

export const routes: RouteRecordRaw[] = [
    {
        name: 'login',
        path: '/login',
        component: LoginView,
        meta: {
            title: '登陆'
        }
    },
    {
        name: 'home',
        path: '/',
        redirect: 'dashboard',
        component: IndexLayout,
        children: formatFlatteningRoutes(menuRoutes)
    },
    {
        path: '/:pathMatch(.*)*',
        name: 'notFound',
        component: NotFoundView,
        meta: {
            title: '404'
        }
    }
]
