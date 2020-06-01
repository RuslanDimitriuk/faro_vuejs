<template>
  <div class="feature">
    <div class="feature-main">
      <div class="price-block">
        <div class="price-title">
          <span>Цена</span>
        </div>
        <span class="price_num"
              :class="{price_old: currentProduct.price_sale !== null}">{{currentProduct.price}}</span>
        <span class="price_num_sale"
              :class="{price_sale: currentProduct.price_sale === null}">{{currentProduct.price_sale}}</span>
        <span class="price_rub" :class="{price_rub_s : currentProduct.price_sale === null}">₽</span>
      </div>
      <div class="btn-box">
        <button class="card__data-button" @click="showModalwer">
          <span>В корзину</span>
        </button>
      </div>
    </div>
    <div>
      <div class="config">
        <span class="config_title">Конфигурация</span>
      </div>
      <div v-if="currentProduct.param.mat_front !== null" class="info_block">
        <span class="info_block-title">Материал фасада:</span> <span class="config_block-param">{{currentProduct.param.mat_front}}</span>
      </div>
      <div v-if="currentProduct.param.mat_corp !== null" class="info_block">
        <span class="info_block-title">Материал корпуса:</span> <span class="config_block-param">{{currentProduct.param.mat_corp}}</span>
      </div>
      <div v-if="currentProduct.param.made_in !== null" class="info_block">
        <span class="info_block-title">Производитель:</span> <span class="config_block-param">{{currentProduct.param.made_in}}</span>
      </div>
      <div v-if="currentProduct.param.color !== null" class="info_block">
        <span class="info_block-title">Цвет:</span> <span class="config_block-param">{{currentProduct.param.color}},</span>
        <span v-if="currentProduct.param.color_1 !== null" class="config_block-param"> {{currentProduct.param.color_1}}</span>
      </div>
      <div class="config">
        <span class="config_title">Размеры</span>
      </div>
      <div v-if="currentProduct.param.cabinet_h !== null" class="info_block">
        <span class="info_block-title">Шкаф</span>
        <div class="info_block-param">
          <span>{{currentProduct.param.cabinet_h}}см.</span>
          <span>х</span>
          <span>{{currentProduct.param.cabinet_w}}см.</span>
          <span>x</span>
          <span>{{currentProduct.param.cabinet_l}}см.</span>
        </div>
      </div>
      <div v-if="currentProduct.param.bed_h !== null" class="info_block">
        <span class="info_block-title">Кровать</span>
        <div class="info_block-param">
          <span>{{currentProduct.param.bed_h}}см.</span>
          <span>х</span>
          <span>{{currentProduct.param.bed_w}}см.</span>
          <span>x</span>
          <span>{{currentProduct.param.bed_l}}см.</span>
        </div>
      </div>
      <div v-if="currentProduct.param.sleeper_l !== null" class="info_block">
        <span class="info_block-title">Спальное место</span>
        <div class="info_block-param">
          <span>{{currentProduct.param.sleeper_w}}см.</span>
          <span>х</span>
          <span>{{currentProduct.param.sleeper_l}}см.</span>
        </div>
      </div>
      <div v-if="currentProduct.param.commode_h !== null" class="info_block">
        <span class="info_block-title">Комод</span>
        <div class="info_block-param">
          <span>{{currentProduct.param.commode_h}}см.</span>
          <span>х</span>
          <span>{{currentProduct.param.commode_w}}см.</span>
          <span>x</span>
          <span>{{currentProduct.param.commode_l}}см.</span>
        </div>
      </div>
      <div v-if="currentProduct.param.tumbaTV_h !== null" class="info_block">
        <span class="info_block-title">Тумба под ТВ</span>
        <div class="info_block-param">
          <span>{{currentProduct.param.tumbaTV_h}}см.</span>
          <span>х</span>
          <span>{{currentProduct.param.tumbaTV_w}}см.</span>
          <span>x</span>
          <span>{{currentProduct.param.tumbaTV_l}}см.</span>
        </div>
      </div>
      <div v-if="currentProduct.param.nightstand_h !== null" class="info_block">
        <span class="info_block-title">Тумба прикроватная</span>
        <div class="info_block-param">
          <span>{{currentProduct.param.nightstand_h}}см.</span>
          <span>х</span>
          <span>{{currentProduct.param.nightstand_w}}см.</span>
          <span>x</span>
          <span>{{currentProduct.param.nightstand_l}}см.</span>
        </div>
      </div>
      <div v-if="currentProduct.param.mirror_h !== null" class="info_block">
        <span class="info_block-title">Зеркало</span>
        <div class="info_block-param">
          <span>{{currentProduct.param.mirror_h}}см.</span>
          <span>х</span>
          <span>{{currentProduct.param.mirror_w}}см.</span>
          <span>x</span>
          <span>{{currentProduct.param.mirror_l}}см.</span>
        </div>
      </div>
      <div v-if="currentProduct.param.mattress_w !== null" class="info_block">
        <span class="info_block-title">Матрас</span>
        <div class="info_block-param">
          <span>{{currentProduct.param.mattress_w}}см.</span>
          <span>x</span>
          <span>{{currentProduct.param.mattress_l}}см.</span>
        </div>
      </div>
    </div>
    <after-selection-product/>
  </div>
</template>

<script>
  import {mapState, mapActions} from 'vuex';
  import AfterSelectionProduct from "../modals/AfterSelectionProduct";

  export default {
    name: "product-configuration",
    components: {AfterSelectionProduct},
    methods:{
      showModalwer() {
        this.$modal.show('selectedProduct');
      }
    },
    computed: {
      ...mapState('products', ['currentProduct']),
    }
  }
</script>

<style scoped>
  .feature {
    margin: 20px 0 20px 0;
    width: 26%;
    min-width: 310px;
    border-radius: 10px;
    box-shadow: 0 0 10px 5px lightCyan;
  }

  .feature-main {
    background: gainsboro;
    height: 200px;
    border-radius: 10px 10px 0 0;
  }
.price-block{
  height: 130px;
}
.price-title{
  font-size: 20px;
  padding: 40px 0 20px 30px;
}
.price_num{
  padding-left: 40px;
  font-size: 28px;
  color: black;
}

.price_num_sale{
  padding-left: 10px;
  font-size: 32px;
  color: black;

}
.price_rub{
  color: black;
  font-size: 30px;
}

.price_rub{
  font-size: 34px;
}
  .btn-box {
    text-align: center;
    margin-bottom: 15px;
  }

  .card__data-button {
    font-family: Circe Light;
    width: 200px;
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

  .price_old {
    text-decoration: line-through;
    color: #7f828b;
  }

  .price_sale {
    display: none;
  }
  .config{
    margin: 20px 0 15px 20px;
  }
  .config_title{
font-size: 20px;
  }
  .info_block{
    margin-bottom: 10px;
  }
  .info_block-title{
    display: inline-block;
    padding-left: 20px;
    font-size: 16px;
    margin-bottom: 5px;
  }
  .info_block-param{
    padding-left: 20px;
    font-size: 18px;
    color: black;
  }
  .config_block-param{
    padding-left: 5px;
    font-size: 16px;
    color: black;
  }
</style>
