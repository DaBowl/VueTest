import Vue from 'vue'
import Router from 'vue-router'
import index from '@/pages/index'
const HelloWorld = () =>
import(/* webpackChunkName: "HelloWorld" */ '@/components/HelloWorld')
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      meta: { title: '首页' },
      component: index,
      children: [
        {
          path: 'hellow',
          name: 'HelloWorld',
          component: HelloWorld,
          meta: { title: '你好' }
        },
        {
          path: 'first',
          name: 'first',
          component: index,
          meta: { title: '首页' }
        }
      ]
    }

  ]
})
