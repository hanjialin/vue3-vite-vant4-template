import { RouteRecordRaw } from 'vue-router'
import layout from '@/layout/LayOut.vue'
/*
 * @desc
 * @param name 路由名称, 必须设置,且不能重名
 * @param meta 路由元信息（路由附带扩展信息）
 * @param redirect 重定向地址, 访问这个路由时,自定进行重定向
 * @param meta.title 菜单名称
 * @param meta.sort 排序越小越排前
 * @author HanJiaLin
 * @time 2023/5/8 9:34
 * */
const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: ' Home',
    component: layout,
    redirect: '/home',
    meta: {
      title: '首页',
      sort: 1,
      isShowTabBar: true
    },
    children: [
      {
        path: 'home',
        name: 'HomeDetail',
        component: () => import('@/views/home/HomeIndex.vue'),
        meta: { title: '首页' }
      }
    ]
  }
]
export default routes
