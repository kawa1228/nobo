<template>
  <section class="work-item-page">
    <component :is="setComponent"/>
    <Pageup class="pageup"/>
    <template v-if="nextCard">
      <router-link :to="`/work/${nextCardId}`">
        <img class="next-image" :src="nextCard.image.next" alt="">
      </router-link>
    </template>
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
  .pageup {
    margin: 8rem 0;
  }
  .next-image {
    width: 100%;
  }
}
</style>
