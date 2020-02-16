<template>
  <article class="work-item flex-center">
    <div class="contents">
      <p>Do est reprehenderit commodo culpa. Exercitation reprehenderit nisi voluptate eiusmod cupidatat pariatur cupidatat enim elit pariatur consequat in velit consectetur.</p>
      <p>In do tempor officia elit sunt. Irure officia dolor consectetur cupidatat.</p>
      <img src="/img/work/01/article/sample.png" alt="">
      <p>Mollit laboris nisi nostrud reprehenderit minim ex. Pariatur aliquip in Lorem labore tempor irure voluptate incididunt cupidatat quis incididunt elit esse quis. Consectetur ipsum aliquip proident officia ut quis qui esse tempor consequat eiusmod in ipsum dolor. Non duis ipsum ipsum ullamco enim irure commodo proident incididunt.</p>
      <!-- credit -->
      <div v-if="card && card.credit" class="credit-area flex-center">
        <h2 class="title text-head-3">CREDIT</h2>
        <template v-for="(name, title, index) of card.credit">
          <p class="credit text-body-3" :key="index">{{title}}:{{name}}</p>
        </template>
      </div>
    </div>
  </article>
</template>

<script>
export default {
  name: 'Lipton1',
  props: {
    card: {
      type: Object,
      default: null
    }
  }
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
    .credit-area {
      margin-top: 9.2rem;

      .title {
        margin-bottom: 1.1rem;
      }

      .credit {
        color: $color-text-sub;
        text-align: center;
      }
    }
  }
}
</style>
