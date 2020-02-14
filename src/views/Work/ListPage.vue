<template>
  <section class="work-page">
    <div class="contents">
      <!-- card list -->
      <template v-for="(work, index) in works" >
        <router-link class="link" :to="`/work/${work.id}`" :key="index">
          <div class="work-mask">
            <span class="title">{{ work.title }}</span>
            <span class="sub-title">{{ work['sub-title'] }}</span>
          </div>
          <img class="work-image" :src="work.image.path" :alt="work.image.alt">
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
      position: relative;
      animation-name: fade-up;

      // linkが増えたら追記
      // worksの最大表示数が決まれば追記しなくてOKになる
      animation-duration: 1s;

      &:nth-child(2) {
        animation-duration: 1.5s;
      }
      &:nth-child(3) {
        animation-duration: 2s;
      }
      &:hover {
        .work-mask {
          opacity: 1;
          transition: .5s;
        }
      }
    }

    .work-mask {
      opacity: 0;
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      text-align: center;
      position: absolute;
      background: rgba($color: $color-background, $alpha: 0.8);

      .title {
        font-size: 5.2rem;
        font-weight: 700;
        margin-bottom: 1.8rem;
      }
      .sub-title {
        color: $color-text-sub;
        white-space: nowrap;
      }
    }
    .work-image {
      width: 100%;
    }
  }
}
</style>
