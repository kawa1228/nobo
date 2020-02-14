<template>
  <div id="app">
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
<style lang="scss">
</style>
