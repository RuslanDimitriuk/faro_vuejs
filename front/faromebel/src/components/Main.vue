<template>
  <div class="main">
    <slider class="main__slider"/>
    <goods-lists/>
    <hit-salesmen/>
    <div>
      <div>
        <span class="main__hit-goods-title">Хиты продаж</span>
      </div>
      <hit-goods/>
    </div>
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
  .main__hit-goods-title{
    margin: 60px auto 40px;
    display: flex;
    justify-content: center;
    color: #000;
    font-size: 3vw;
    text-transform: uppercase;
  }
</style>
