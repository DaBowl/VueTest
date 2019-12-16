<template>
  <div class="index">
    {{tableDataView}}
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'index',
  components: {
  },
  data () {
    return {
    }
  },
  computed: mapState({
    tableDataView: state => state.mainStore.mainIndex.tableDataView
  }),
  mounted () {
  },
  methods: {
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
