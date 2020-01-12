<template>
  <div class="main">
    <slider class="main__slider"/>
    <goods-lists/>
    <hit-salesmen/>
    <hit-goods/>
  </div>
</template>

<script>
    import Slider from "./main/Slider";
    import GoodsLists from "./main/GoodsLists";
    import HitSalesmen from "./main/HitSalesmen";
    import PopupFeedback from "./main/PopupFeedback";
    import HitGoods from "./main/hitGoods";
    export default {
        name: "Main",
      components: {HitGoods, HitSalesmen, GoodsLists, Slider},
      data() {
          return {

          }
      }
    }
</script>

<style scoped>
  .main {

  }
</style>
