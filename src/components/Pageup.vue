<docs>
# Pageup コンポーネント

* クリックすると画面上部にスクロールされる
</docs>

<template>
  <div class="pageup">
    <PageupIcon class="pageup-icon" @click="toScrollTop"/>
  </div>
</template>

<script>
import PageupIcon from '@/assets/svg/page-up.svg'

export default {
  name: 'Pageup',
  components: {
    PageupIcon
  },
  methods: {
    toScrollTop() {
      const options = {
        top: 0,
        behavior: "smooth"
      }
      window.scrollTo(options);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.pageup {
  display: flex;
  align-items: center;
  justify-content: center;

  &-icon {
    cursor: pointer;
    width: 8rem;
    height: 8rem;

    @include screen-mq(tab) {
      width: 4rem;
      height: 4rem;
    }

    &:hover {
      transition: 0.8s;
      opacity: 0.5;
    }
  }
}
</style>
