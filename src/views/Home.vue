<template>
  <div class="home">
    <Logo class="logo"/>
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import Logo from '@/assets/svg/logo.svg'

export default {
  name: 'home',
  components: {
    HelloWorld,
    Logo
  }
}
</script>
<style lang="scss" scoped>
.home {
  .logo {
    width: 160px;
    height: 42px;
  }
}
</style>
