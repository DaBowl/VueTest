<template>
<div class="index">
  <el-container>
      <el-header>
        <nav-menu :list = "routeList"></nav-menu>
      </el-header>
      <el-main height='100%'>
        <router-view></router-view>
      </el-main>
    </el-container>
</div>
</template>
<script>
import NavMenu from './components/nav.vue'
import { mapState } from 'vuex'
import routes from '@/router/index'

export default {
  components: {
    NavMenu: NavMenu
  },
  computed: {
    ...mapState({
      tableDataView: state => state.storeDemo.demoInner.tableDataView
    })
  },
  data () {
    return {
      routeList: routes.options.routes
    }
  }
}
</script>

<style lang="scss" scope>
*{
  padding: 0px;
  margin: 0px;
}
html, body {
    color: #000000;
    height: 100%;
}
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
