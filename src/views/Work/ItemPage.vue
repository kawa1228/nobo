<template>
  <section class="work-item-page flex-center">
    <template v-if="card">
      <!-- title -->
      <h1>{{ card.title }}</h1>
      <p class="sub-title">{{ card['sub-title'] }}</p>
      <hr class="border">
      <!-- header image -->
      <template v-if="card.image.header">
        <img class="header-image" :src="card.image.header" :alt="card.image.alt">
      </template>
      <!-- contents -->
      <component :is="setComponent"/>
      <Pageup class="pageup"/>
      <!-- next card -->
      <template v-if="nextCard && nextCard.image.next">
        <a class="next-link" :href="`/work/${nextCardId}`">
          <img class="next-image" :src="nextCard.image.next" :alt="nextCard.image.alt">
        </a>
      </template>
    </template>
    <p v-else>コンテンツがありません</p>
  </section>
</template>

<script>
// @ is an alias to /src
import Pageup from '@/components/Pageup'
import works from '@/assets/json/works.json'

export default {
  name: 'WorkItemPage',
  components: {
    Pageup,
    // 新しくworkが増えたら追加
    'Lipton1': () => import('@/components/WorkItems/Lipton1'),
    'Lipton2': () => import('@/components/WorkItems/Lipton2'),
    'Lipton3': () => import('@/components/WorkItems/Lipton3'),
  },
  data() {
    return {
      works: works.contents
    }
  },
  computed: {
    setComponent() {
      const workId = this.$route.params.work_id;
      const workComponent = this.works[workId].component;
      return workComponent;
    },
    card() {
      const workId = this.$route.params.work_id;
      return this.works[workId];
    },
    nextCardId() {
      const workId = this.$route.params.work_id;
      return Number(workId) + 1
    },
    nextCard() {
      if (this.works[this.nextCardId] == null) return null;
      const nextCard = this.works[this.nextCardId];
      return nextCard;
    }
  }
}
</script>

<style lang="scss" scoped>
.work-item-page {
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
