<docs>
# work ページ

* work card一覧を表示
* cardのフェードインアニメーションは最大9まで設定
* ページネーションは未実装
</docs>

<template>
  <section class="list-page">
    <div v-if="sortWorks" class="contents">
      <!-- card list -->
      <template v-for="(work, index) in sortWorks" >
        <router-link class="link" :to="`/work/${work.name}`" :key="index">
          <div class="work-mask">
            <span class="title text-head-1">{{ work.title }}</span>
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
import works from '@/assets/json/works2.json'
import sortWorks from '@/libs/createWorkUtil.js'

export default {
  name: 'WorkListPage',
  components: {
    Pageup
  },
  data() {
    return {
      works: works.contents
    }
  },
  computed: {
    sortWorks() {
      if (!this.works) return;
      return sortWorks(this.works);
    }
  },
}
</script>

<style lang="scss" scoped>
.list-page {
  .contents {
    margin: 10rem 0 17rem;
    display: grid;
    grid-template-rows: repeat(auto-fill, minmax(1fr));
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 4.3rem;

    // デバイスに合わせて表示する列数を変える
    @include screen-mq(tab) {
      grid-template-columns: 1fr 1fr;
    }
    @include screen-mq(sp) {
      grid-template-columns: 1fr;
    }

    .link {
      position: relative;
      animation-name: fade-up;
      opacity: 0;
      animation-duration: 1s;
      animation-fill-mode: forwards;

      // 最大9のcardを0.1秒ごとフェードインさせる
      $max-display-card: 9;
      $animation-delay: 0;

      @for $index from 1 through $max-display-card {
        &:nth-child(#{$index}) {
          animation-delay: #{$animation-delay}s;
        }
        $animation-delay: $animation-delay + 0.1;
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
