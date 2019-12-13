import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import index from '@/pages/index'

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
        }
      ]
    }

  ]
})
