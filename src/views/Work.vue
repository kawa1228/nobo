<template>
  <section class="work">
    <div class="contents">
      <img src="/img/card_01.png" alt="">
      <img src="/img/card_02.png" alt="">
      <img src="/img/card_03.png" alt="">
      <img src="/img/card_04.png" alt="">
      <img src="/img/card_05.png" alt="">
      <img src="/img/card_06.png" alt="">
      <img src="/img/card_07.png" alt="">
      <img src="/img/card_08.png" alt="">
      <img src="/img/card_09.png" alt="">
    </div>
  </section>
</template>

<script>
// @ is an alias to /src
</script>

<style lang="scss" scoped>
.work {
  .contents {
    display: grid;
    grid-template-rows: 1fr 1fr 1fr;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 4.3rem;

    img {
      width: 100%;
    }
  }
}
</style>
