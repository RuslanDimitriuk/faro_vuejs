<template>
  <main class="product">
    <div class="title-box">
      <h1 class="title">{{getTitle}}</h1>
    </div>
    <div class="information">
      <div class="img-block">
          <img ref="main_img" :src="currentImg" class="img" height="56.25%" width="100%">
        <hooper :infiniteScroll="true" :itemsToShow="3">
          <slide v-for="item in currentProduct.img" :key="item">
            <div class="slider-img-block" >
              <img :src="item" @click="getImage(item)" class="slider-img">
            </div>
          </slide>
          <hooper-navigation slot="hooper-addons"></hooper-navigation>
        </hooper>
      </div>
      <product-configuration/>
    </div>
    <div class="description">
      <p class="description-info">{{currentProduct.description}}</p>
      <p class="description-remark">{{currentProduct.remark}}</p>
    </div>
  </main>
</template>

<script>
  import {mapState, mapActions} from 'vuex';
  import {Hooper, Slide, Navigation as HooperNavigation} from 'hooper';
  import 'hooper/dist/hooper.css';
  import ProductConfiguration from "../../../components/catalog/ProductConfiguration";

  export default {
    name: "product",
    components: {
      ProductConfiguration,
      Hooper,
      Slide,
      HooperNavigation
    },
    data() {
      return {
        currentImg: null,
        test: true
      }
    },
    computed: {
      getTitle() {
        if (this.currentProduct.name !== null) {
          return `${this.currentProduct.category} ${this.currentProduct.name.toUpperCase()}`
        }
      },
      ...mapState('products', ['currentProduct']),
    },
    methods: {
      getImage(data) {
        this.$refs.main_img.classList = 'trt img';
        setTimeout(_=>{
          this.currentImg = data;
          this.$refs.main_img.classList = 'tr img';
        }, 500);
      },
      ...mapActions('products', ['getProduct'])
    },
    async mounted() {
      await this.getProduct({
        data: `product?id=${this.$route.params.productId}`,
        status: 'product'
      }).then(element => {
        console.log(this.currentProduct);
        this.currentImg = this.currentProduct.img[0];
      })
    }
  }
</script>

<style scoped>
  .product {
    font-family: Circe Light;
  }
  .tr {
    transition: .5s;
    opacity: 1;
  }
  .trt {
    transition: .5s;
    opacity: 0;
  }
  .title-box {
    height: 220px;
    background: #f9fbff;
  }

  .title{
    padding-top: 140px;
    font-size: 3vw;
    color: black;
    padding-left: 30px;
  }

  .information {
    display: flex;
    justify-content: space-around;
  }

  .img-block {
    width: 70%;
    margin: 20px 0 20px 0;
  }

  . img{
    width: 100%;
    height: 56.25%;
    margin-bottom: 10px;
  }
  .slider-img-block{
    overflow: hidden;
    cursor: pointer;
  }
  .slider-img{
    width: 21.5vw;
    height: 12.1vw;
  }
  .slider-img:hover {
    transition: .2s;
    transform: scale(1.1);
  }
  .slider-img_active{
    box-shadow: 0 0 10px 5px darkCyan;
  }

  .description{
    width: 90%;
    margin: 20px auto 100px auto;
  }
  .description-info{
    font-size: 20px;
    line-height: 1.25;
    margin-bottom: 40px;
    color: black;
  }
  .description-remark{
    line-height: 1.25;
    font-size: 16px;
    margin-bottom: 30px;
  }
</style>

<style>
  .product .hooper{
    height: 12.1vw;
  }
  .product :focus {outline:none;}
  .product .hooper-prev, .product .hooper-next {
    border-radius: 50%;
    border: 1px solid darkCyan;
    background: rgba(255, 255, 255, .6);
  }
  .product .hooper-prev:hover, .product .hooper-next:hover {
    background: lightCyan;
  }
</style>
