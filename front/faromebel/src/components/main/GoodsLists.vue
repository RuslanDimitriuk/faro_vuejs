<template>
  <div>
    <div class="goods-lists__block">
      <div class="goods-lists__element-block">Спальни</div>
      <div class="goods-lists__element-block">Гостиные</div>
      <div class="goods-lists__element-block">Столовая</div>
    </div>
    <div class="goods-lists__block">
      <div class="goods-lists__element-block">Текстиль</div>
      <div class="goods-lists__element-block">Аксессуары</div>
      <div class="goods-lists__element-block">Матрасы</div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "GoodsLists"
    }
</script>

<style scoped>
  .goods-lists__block{
    display: flex;
  }
.goods-lists__element-block{
  border: solid 1px gainsboro;
  width: 34%;
  height: 250px;
  background-color: #ffffff;
}
  .goods-lists__element-block:hover{
    background-color: rgba(0,0,0, .1);
    border: solid 1px rgba(0,0,0, .4);
    z-index: 50;
    box-shadow: 0 0 10px 5px #fff;
  }
</style>
