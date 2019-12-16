import Vue from 'vue'
import Router from 'vue-router'
const first = () =>
import(/* webpackChunkName: "first" */ '@/pages/level-first/index')
const second = () =>
import(/* webpackChunkName: "first" */ '@/pages/level-second/index')
const index = () =>
import(/* webpackChunkName: "index" */ '@/pages/index')
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      meta: { title: '首页' },
      component: index
    },
    {
      path: '/first',
      name: 'first',
      component: first,
      meta: { title: '第一' }
    },
    {
      path: '/second',
      name: 'second',
      component: second,
      meta: { title: '第二' }
    }
  ]
})
