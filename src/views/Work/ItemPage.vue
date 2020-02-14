<template>
  <section class="work-item-page">
    <component :is="setComponent"/>
    <Pageup/>
  </section>
</template>

<script>
// @ is an alias to /src
import Pageup from '@/components/Pageup'

export default {
  name: 'WorkItemPage',
  components: {
    Pageup,
    // 新しくworkが増えたら追加
    'Lipton1': () => import('@/components/WorkItems/Lipton1'),
    'Lipton2': () => import('@/components/WorkItems/Lipton2'),
    'Lipton3': () => import('@/components/WorkItems/Lipton3'),
  },
  computed: {
    setComponent() {
      const workName = this.$route.params.work_name;
      return workName;
    }
  }
}
</script>

<style lang="scss" scoped>
.work-item-page {
}
</style>
