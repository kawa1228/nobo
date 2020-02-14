<template>
  <header class="header">
    <Logo class="logo"/>
    <Navigation/>
  </header>
</template>

<script>
import Logo from '@/assets/svg/logo.svg'
import Navigation from '@/components/Navigation'

export default {
  name: 'Header',
  components: {
    Logo,
    Navigation
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.header {
  display: flex;
  align-items: center;
  justify-content: space-between;

  .logo {
    width: 12.3rem;
    height: 7.6rem;
  }
}
</style>
