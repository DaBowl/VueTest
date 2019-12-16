<template>
  <div class="index">
    {{'第一'}}
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
    }
  },
  computed: mapState({
  }),
  mounted () {
  },
  methods: {

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='scss' scoped>
</style>
