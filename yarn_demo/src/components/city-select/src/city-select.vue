<template>
  <el-select v-model="value" placeholder="请选择">
    <el-option
      v-for="item in options"
      :key="item.value"
      :label="item.label"
      :value="item.value">
    </el-option>
  </el-select>
</template>

<script>

export default {
  name: 'ScmCitySelect',
  componentName: 'ScmCascader',
  props: {
    level: {
      // 需要查询到省或者市 1: 省; 2: 市;
      type: Number,
      default: 2
    },
    placeholder: {
      // 输入框占位文本
      type: String,
      default: ''
    },
    disabled: {
      // 是否禁用
      type: Boolean,
      default: false
    },
    customList: {
      // 需要插入到备选列表中的数据(插入到首位)
      type: Array,
      default () {
        return []
      }
    }
  },
  watch: {
    value: {
      handler (newVal) {
        // 绑定值发生改变是重新请求数据
        this.inner = newVal
      },
      immediate: true
    }
  },
  data () {
    return {
    }
  },
  computed: {
  },
  mounted () {
  },
  methods: {
  }
}
</script>

<style lang="scss" scope>

</style>
