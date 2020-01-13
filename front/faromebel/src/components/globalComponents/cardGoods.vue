<template>
  <div class="card">
    <div class="card__main" ref="main">
      <div class="card__img-box">
        <img :src="getImage" height="152" width="270"/>
      </div>
      <div class="card__data">
        <div class="card__category">
          {{dataObject.category}}
        </div>
        <div class="card__name">
          {{dataObject.name}}
        </div>
        <div class="card__price-title">
          Цена
        </div>
        <div class="card__price">
          <span>{{dataObject.price}}</span>
          <span>{{dataObject.newPrice}}</span>
          <span class="card__price-v">₽</span>
        </div>
      </div>
    </div>
    <div class="card__data-none" :class="{card__data_view: showInformation}">
      <div class="card__data">
        <div class="card__size-block">Размеры</div>
        <div class="card__size">
          <div>
            <div class="card__size-block-title">длина</div>
            <div class="card__size-block-value">{{dataObject.long}}<span class="measurement">см</span></div>
          </div>
          <span class="card__size-block_x">x</span>
          <div>
            <div class="card__size-block-title">ширина</div>
            <div class="card__size-block-value">{{dataObject.weight}}<span class="measurement">см</span></div>
          </div>
          <span class="card__size-block_x">x</span>
          <div>
            <div class="card__size-block-title">высота</div>
            <div class="card__size-block-value">{{dataObject.height}}<span class="measurement">см</span></div>
          </div>
        </div>
      </div>
      <div class="card__data-block">
        <button class="card__data-button">
          <span v-if="dataObject.inStock">Купить</span>
          <span v-if="!dataObject.inStock">Заказать</span>
        </button>
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
    computed: {
      getImage() {
        return require(`../../assets/labes/${this.dataObject.imgName}.jpg`);
      }
    },
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
    box-sizing: border-box;
    position: relative;
    display: inline-block;
    width: 300px;
    min-height: 300px;
  }

  .card:hover {
    border-radius: 5px 5px 0 0;
    position: relative;
    z-index: 100;
    box-shadow: 0 0 10px 10px rgba(0, 0, 0, .3);
  }

  .card__data {
    padding-left: 10px;
  }

  .card__img-box {
    padding-top: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 10px;
  }

  .card__category {
    color: darkSlateGray;
    font-size: 18px;
    margin-bottom: 5px;
  }

  .card__name {
    color: #000000;
    font-size: 22px;
    margin-bottom: 30px;
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


</style>
