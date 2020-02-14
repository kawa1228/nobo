<template>
  <section class="work-page">
    <div class="contents">
      <!-- card list -->
      <template v-for="(work, index) in works" >
        <router-link class="link" :to="`/work/${work.id}`" :key="index">
          <img :src="work.image.path" :alt="work.image.alt">
        </router-link>
      </template>
    </div>
    <Pageup/>
  </section>
</template>

<script>
// @ is an alias to /src
import Pageup from '@/components/Pageup'
import works from '@/assets/json/works.json'

export default {
  name: 'ListPage',
  components: {
    Pageup
  },
  data() {
    return {
      works: works.contents
    }
  }
}
</script>

<style lang="scss" scoped>
.work-page {
  .contents {
    margin: 20.3rem 0 17rem;
    display: grid;
    grid-template-rows: repeat(auto-fill, minmax(1fr));
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 4.3rem;

    .link {
      animation-name: fade-up;

      // 0.5秒ごと
      animation-duration: 1s;

      &:nth-child(2) {
        animation-duration: 1.5s;
      }
      &:nth-child(3) {
        animation-duration: 2s;
      }
    }

    img {
      width: 100%;
    }
  }
}
</style>
