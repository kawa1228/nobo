<template>
  <div class="app">
    <Header/>
    <router-view/>
  </div>
</template>

<script>
import 'ress'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import Header from '@/components/Header'

export default {
  components: {
    Header
  }
}
</script>
<style lang="scss" scoped>
.app {
  padding: 6.2rem 7.6rem;

  @include screen-mq(tab) {
    padding: 2rem;
  }
}
</style>
