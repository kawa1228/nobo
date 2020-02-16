<docs>
# Navigation コンポーネント

* 各ページのリンクを表示
</docs>

<template>
  <nav class="navigation">
    <ul class="list">
      <li class="item" v-for="(page, index) in pages" :key="index">
        <router-link :to="page.link">{{ page.name }}</router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'Navigation',
  data() {
    return {
      pages: [
        { name: 'WORK', link: '/work' },
        { name: 'ABOUT', link: '/about' },
        { name: 'CONTACT', link: '/contact' },
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.navigation {
  .list {
    display: flex;
    .item {
      margin-left: 7.9rem;

      &:first-child {
        margin-left: 0;
      }
    }
  }
}
</style>
