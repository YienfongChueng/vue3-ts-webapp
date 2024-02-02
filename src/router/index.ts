import { createRouter,createWebHashHistory,RouteRecordRaw } from 'vue-router'

const routes:RouteRecordRaw[] = [
    {
        path: '/',
        redirect: '/index',
        meta: { hidden: true}
    },
    {
       path: '/index',
       name: 'index',
       component: () => import('@/views/content/index/index.vue'),
       meta: { title: '首页',icon: 'icon-shouye', hidden: false}
    },
    {
        path: '/search',
        name: 'search',
        component: () => import('@/views/content/search/index.vue'),
        meta: { title: '分类页',icon: 'icon-sousuo', hidden: false}
    },
    {
        path: '/cart',
        name: 'cart',
        component: () => import('@/views/content/cart/index.vue'),
        meta: { title: '购物车',icon: 'icon-gouwuche', hidden: false}
    },
    {
        path: '/mine',
        name: 'mine',
        component: () => import('@/views/content/mine/index.vue'),
        meta: { title: '我的',icon: 'icon-wode1', hidden: false}
    },
    {
        path: '/detail/:id',
        name: 'detail',
        component: () => import('@/views/content/detail/index.vue'),
        meta: { title: '详情',icon: '', hidden: true}
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router