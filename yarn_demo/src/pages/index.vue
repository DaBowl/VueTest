<template>
  <div class="index">
    <el-container>
      <el-header>
        <el-menu default-active="/" class="el-menu-demo" mode="horizontal" @select="handleSelect">
          <el-submenu index="1">
            <template slot="title">我的工作台</template>
            <el-menu-item :index="item.path" v-for="(item, i) in routeList" :key="i">
              {{item.meta.title}}
            </el-menu-item>
          </el-submenu>
          <el-menu-item index="3" disabled>啥都没有</el-menu-item>
          <el-menu-item index="4"><a href="https://www.ele.me" target="_blank">订单管理</a></el-menu-item>
        </el-menu>
      </el-header>
      <el-main height='100%'>
        {{tableDataView}}
      </el-main>
    </el-container>
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
      routeList: []
    }
  },
  computed: mapState({
    tableDataView: state => state.storeDemo.demoInner.tableDataView
  }),
  mounted () {
    this.init()
  },
  methods: {
    init () {
      this.routeList = routes.options.routes[0].children
      console.log(this.routeList)
    },
    handleSelect (path) {
      console.log('当前菜单path', path)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='scss' scoped>
.el-header, .el-footer {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
  }

  .el-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    line-height: 200px;
  }

  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 160px;
  }

  body > .el-container {
    margin-bottom: 40px;
  }
  .index{
    height: 100%;
    .el-container{
      height:100%
    }
  }
</style>
