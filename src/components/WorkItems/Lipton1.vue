<template>
  <article class="work-item flex-center">
    <div class="contents">
      <p>Do est reprehenderit commodo culpa. Exercitation reprehenderit nisi voluptate eiusmod cupidatat pariatur cupidatat enim elit pariatur consequat in velit consectetur.</p>
      <p>In do tempor officia elit sunt. Irure officia dolor consectetur cupidatat.</p>
      <img src="/img/work/01/article/sample.png" alt="">
      <p>Mollit laboris nisi nostrud reprehenderit minim ex. Pariatur aliquip in Lorem labore tempor irure voluptate incididunt cupidatat quis incididunt elit esse quis. Consectetur ipsum aliquip proident officia ut quis qui esse tempor consequat eiusmod in ipsum dolor. Non duis ipsum ipsum ullamco enim irure commodo proident incididunt.</p>
    </div>
  </article>
</template>

<script>
export default {
  name: 'Lipton',
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.work-item {
  margin: 7.4rem 0;

  .contents {
    width: calc(100vw - 40%);

    @include screen-mq(tab) {
      width: 100%;
    }

    img {
      width: 100%;
      margin: 7rem 0;
    }
  }
}
</style>
