<docs>
# work 詳細ページ

* 各詳細ページを表示するための共通のwrapper部分
* 詳細はsrc/components/WorkItems/配下のコンポーネントに追記
</docs>

<template>
  <section class="work-item-page flex-center">
    <template v-if="card">
      <!-- title -->
      <h1 class="text-head-1">{{ card.title }}</h1>
      <p class="sub-title">{{ card['sub-title'] }}</p>
      <hr class="border">
      <!-- header image -->
      <template v-if="card.image.header">
        <img class="header-image" :src="card.image.header" :alt="card.image.alt">
      </template>
      <!-- contents -->
      <component :is="componentName" :card="card"/>
      <Pageup class="pageup"/>
      <!-- next card -->
      <template v-if="nextCard && nextCard.image.next">
        <a class="next-link" :href="`/work/${nextCard.name}`">
          <img class="next-image" :src="nextCard.image.next" :alt="nextCard.image.alt">
        </a>
      </template>
      <template v-else-if="nextCard">
        <a class="next-link" :href="`/work/${nextCard.name}`">> next work</a>
      </template>
    </template>
    <p v-else>コンテンツがありません</p>
  </section>
</template>

<script>
// @ is an alias to /src
import Pageup from '@/components/Pageup'
import works from '@/assets/json/works2.json'
import sortWorks from '@/libs/workUtil.js'

export default {
  name: 'WorkItemPage',
  components: {
    Pageup
  },
  data() {
    return {
      works: works.contents
    }
  },
  beforeCreate() {
    // パラメータ名と同一の記事詳細コンポーネントを読み込む
    const componentName = this.$route.params.work_name;
    try {
      const workItem = require(`@/components/WorkItems/${componentName}`)
      this.$options.components[componentName] = workItem.default
    } catch (error) {
      console.error("そんなページは存在しません。正しいURLでアクセスしてください！")
    }
  },
  computed: {
    sortWorks() {
      if (!this.works) return;
      return sortWorks(this.works);
    },
    componentName() {
      const componentName = this.$route.params.work_name;
      return componentName;
    },
    cardId() {
      if (!this.card) return;
      return this.card.id;
    },
    card() {
      if (!this.componentName) return;
      return this.works[this.componentName];
    },
    nextCard() {
      if (!this.cardId || !this.sortWorks) return;
      const works = this.sortWorks;
      // jsonの記述順に左右されないよう配列における現在のcardの次のcardを返す
      const currentOffset = works.findIndex((work) => work.id == this.cardId);
      const nextOffset = currentOffset + 1;

      return works[nextOffset];
    }
  }
}
</script>

<style lang="scss" scoped>
.work-item-page {
  margin: 10rem 0;

  .sub-title {
    color: $color-text-sub;
  }
  .border {
    width: 6.6rem;
    opacity: 0.5;
    margin-bottom: 6.9rem;
  }
  .pageup {
    margin: 8rem 0;
  }
  img {
    width: 100%;
  }
  .next-link:hover {
    transition: 0.8s;
    opacity: 0.5;
  }
}
</style>
