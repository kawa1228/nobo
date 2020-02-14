<template>
  <nav class="navigation">
    <ul class="list">
      <li>
        <router-link to="/work">WORK</router-link>
      </li>
      <li>
        <router-link to="/about">ABOUT</router-link>
      </li>
      <li>
        <router-link to="/contact">CONTACT</router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'Navigation'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.navigation {
  .list {
    display: flex;
  }
}
</style>
