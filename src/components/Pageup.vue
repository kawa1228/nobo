<template>
  <div class="pageup">
    <PageupIcon class="pageup-icon"/>
  </div>
</template>

<script>
import PageupIcon from '@/assets/svg/page-up.svg'

export default {
  name: 'Pageup',
  components: {
    PageupIcon
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
