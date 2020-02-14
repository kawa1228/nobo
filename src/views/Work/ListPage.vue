<template>
  <section class="work-page">
    <div class="contents">
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

    img {
      width: 100%;
    }
  }
}
</style>
