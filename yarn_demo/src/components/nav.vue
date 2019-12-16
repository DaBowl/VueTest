<template>
  <div class="index">
        <el-menu :router="true" class="el-menu-demo" mode="horizontal" @select="handleSelect">
          <el-submenu index="index">
            <template slot="title">我的工作台</template>
            <el-menu-item :index="item.path" v-for="(item, i) in list" :key="i">
              {{item.meta.title}}
            </el-menu-item>
          </el-submenu>
          <el-menu-item index="3">啥都没有</el-menu-item>
          <el-menu-item index="4"><a href="https://www.ele.me" target="_blank">订单管理</a></el-menu-item>
        </el-menu>
  </div>
</template>

<script>
import routes from '@/router/index'
import { mapState } from 'vuex'

export default {
  name: 'index',
  components: {
    routes
  },
  data () {
    return {
      inner: []
    }
  },
  props: {
    list: {
      type: Array,
      default () {
        return []
      }
    }
  },
  watch: {
    // list: {
    //   handler (newVal) {
    //     // 绑定值发生改变是重新请求数据
    //     this.inner = newVal
    //   },
    //   immediate: true
    // }
  },
  computed: {
    ...mapState({
      tableDataView: state => state.storeDemo.demoInner.tableDataView
    })
  },
  mounted () {
    this.init()
  },
  methods: {
    init () {
      // this.routeList = routes.options.routes[0].children
    },
    handleSelect (path) {
      console.log('当前菜单path', path)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='scss' scoped>

</style>
