<template>
  <div class="card">
    <div class="card__main" ref="main">
      <div class="card__img-box">
        <nuxt-link :to="{name: 'catalog-product-productId', params: {
         productId: dataObject.id} }">
        <img :src="dataObject.img[0]" class="card__img"/>
        <div class="action">
          <div v-if="dataObject.price_sale !== null" class="action_item">
            <img src="./../../static/labes/sale.png" class="action_image">
          </div>
        </div>
        </nuxt-link>
      </div>
      <div class="card__data">
        <div class="card__category">
          {{dataObject.category}}
        </div>
        <div class="card__name">
          <nuxt-link :to="{name: 'catalog-product-productId', params: {
         productId: dataObject.id} }">{{dataObject.name}}</nuxt-link>
        </div>
        <div class="card__price-title">
          Цена
        </div>
        <div class="card__price">
          <span :class="{price_old: dataObject.price_sale !== null}">{{dataObject.price_sale}}</span>
          <span>{{dataObject.price}}</span>
          <span class="card__price-v">₽</span>
        </div>
      </div>
    </div>
    <div class="card__data-none" :class="{card__data_view: showInformation}">
      <!--<div class="card__data">-->
      <!--<div class="card__size-block">Размеры</div>-->
      <!--<div class="card__size">-->
      <!--<div>-->
      <!--<div class="card__size-block-title">длина</div>-->
      <!--<div class="card__size-block-value">{{dataObject.the_long}}<span class="measurement">см</span></div>-->
      <!--</div>-->
      <!--<span class="card__size-block_x">x</span>-->
      <!--<div>-->
      <!--<div class="card__size-block-title">ширина</div>-->
      <!--<div class="card__size-block-value">{{dataObject.the_weight}}<span class="measurement">см</span></div>-->
      <!--</div>-->
      <!--<span class="card__size-block_x">x</span>-->
      <!--<div>-->
      <!--<div class="card__size-block-title">высота</div>-->
      <!--<div class="card__size-block-value">{{dataObject.the_height}}<span class="measurement">см</span></div>-->
      <!--</div>-->
      <!--</div>-->
      <!--</div>-->
      <div class="card__data-block">
        <nuxt-link :to="{name: 'catalog-product-productId', params: {
         productId: dataObject.id} }">
          <button class="card__data-button">
            <span>Купить</span>
          </button>
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "cardGoods",
    data() {
      return {
        showInformation: false
      }
    },
    props: {
      dataObject: {
        type: Object
      }
    },
    computed: {},
    methods: {
      showInfo() {
        this.showInformation = true;
      },

      notShowInfo() {
        this.showInformation = false;
      }

    },
    mounted() {
      this.$el.addEventListener('mouseover', this.showInfo);
      this.$el.addEventListener('mouseout', this.notShowInfo);
    }
  }
</script>

<style scoped>
  .card {
    font-family: Circe Light, Roboto, Helvetica, sans-serif;
    box-sizing: border-box;
    position: relative;
    display: inline-block;
    width: 300px;
    min-height: 300px;
    margin-bottom: 30px;
  }

  .card:hover {
    border-radius: 5px 5px 0 0;
    position: relative;
    z-index: 100;
    box-shadow: 0 0 10px 10px rgba(0, 0, 0, .3);
  }

  .card__main {
    padding-bottom: 10px;
  }

  .card__data {
    padding-left: 10px;
  }

  .card__img-box {
    padding-top: 15px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 50px;
    position: relative;
  }

  .card__img {
    border-radius: 3px;
    height: 152px;
    width: 270px;
  }

  .card__category {
    color: darkSlateGray;
    font-size: 18px;
    margin-bottom: 15px;
  }

  .card__name {
    font-size: 22px;
    line-height: 24px;
    height: 40px;
    margin-bottom: 15px;
  }

  .card__name a {
    text-decoration: none;
    color: #000;
  }

  .card__price-title {
    color: darkSlateGray;
    font-size: 18px;
    margin-bottom: 15px;
  }

  .card__price {
    color: #000000;
    font-size: 22px;
  }

  .card__size-block {
    color: darkSlateGray;
    font-size: 18px;
    margin-bottom: 15px;
  }

  .card__size {
    display: flex;
    justify-content: space-around;
    margin-bottom: 20px;
  }

  .card__size-block-title {
    color: darkSlateGray;
    font-size: 14px;
    margin-bottom: 5px;
  }

  .card__size-block-value {
    color: #000000;
    font-size: 16px;
  }

  .card__size-block_x {
    margin: auto 0px;
    color: #000000;
  }

  .card__data-none {
    display: none;
  }

  .measurement {
    margin-left: 5px;
  }

  .card__data-block {
    margin: 20px auto;
    display: flex;
    justify-content: center;
  }

  .card__data-button {
    font-family: Circe Light, Roboto, Helvetica, sans-serif;
    width: 260px;
    height: 60px;
    color: #000000;
    background-color: darkCyan;
    font-size: 24px;
    border-radius: 5px;
    box-shadow: 0 0 10px 5px rgba(221, 221, 221, 1);
  }

  .card__data-button:hover {
    transition: 300ms;
    background-color: lightCyan;
  }

  .card__price-v {
    font-size: 24px;
    margin-left: 5px;
  }

  .card__data_view {
    display: block;
    position: absolute;
    z-index: 100;
    top: 100%;
    width: 100%;
    background-color: #fff;
    border-radius: 0 0 5px 5px;
    box-shadow: 11px 10px 10px -1px rgba(0, 0, 0, .3),
    -11px 10px 10px -1px rgba(0, 0, 0, .3);
  }

  .action {
    right: 20px;
    bottom: -45px;
    position: absolute;
    display: flex;
  }
  .action_item{
    margin: 0px 5px;
  }
  .action_image{
    height: 64px;
    width: 64px;
  }
  .price_old {
    text-decoration: line-through;
    color: #7f828b;
  }

</style>
