<template>
  <div class="home-page">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'HomePage',
  components: {
    HelloWorld,
  }
}
</script>
<style lang="scss" scoped>
.home-page {
}
</style>
