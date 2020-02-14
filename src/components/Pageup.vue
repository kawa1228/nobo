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
    width: 8rem;
    height: 8rem;
  }
}
</style>
