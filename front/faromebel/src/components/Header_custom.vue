<template>
  <div class="header">
    <ul class="header__nav">
      <li class="header__elem" @click="clickNumber">
        <div class="header__number">
          <div>
            +375 44 546 7997
          </div>
          <div :class="{header__number_arrow_rotate: !statusNumber}" class="header__number-arrow"></div>
        </div>
      </li>
      <li class="header__elem">
        <div class="header__elem_block">
          О компании
        </div>
      </li>
      <li class="header__elem">
        <div class="header__elem_block">
          Магазин салон
        </div>
      </li>
      <li class="header__elem">
        <div class="header__elem_block">
          Сотрудничество
        </div>
      </li>
      <li class="header__elem">
        <div class="header__elem_block">
          <div class="header__bascet"></div>
          <div class="header__bascet-number">{{$store.state.numberPay}}</div>
        </div>
      </li>
    </ul>
    <transition name="fade">
    <popup-feedback class="header__popup"  v-show="showPopupFeedback" :show-popup-feedback.sync="showPopupFeedback"/>
    </transition>
  </div>
</template>

<script>
  import PopupFeedback from "./main/PopupFeedback";
  export default {
    name: "Header",
    components: {PopupFeedback},
    data() {
      return {
        statusNumber: false,
        showPopupFeedback: false,
      }
    },
    methods: {
      clickNumber() {
        this.statusNumber = !this.statusNumber;
        this.showPopupFeedback = !this.showPopupFeedback;
      }
    }
  }
</script>

<style scoped>
  .header {
    z-index: 100;
    width: calc(100% - 310px);
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100px;
    background-color: rgba(0, 0, 0, .1);
    margin-left: 310px;
  }

  .header__nav {
    width: 80%;
    display: flex;
    justify-content: space-around;
    font-size: 22px;
    color: #ffffff;
  }

  .header__number {
    font-family: Roboto;
    display: flex;
    justify-content: center;
    font-weight: bold;
    cursor: pointer;
    width: 300px;
  }

  .header__number-arrow {
    width: 20px;
    height: 20px;
    background: url("./../assets/arrow.png");
    margin-left: 10px;
    transition: .5s;
  }

  .header__number_arrow_rotate {
    transition: .5s;
    transform: rotate(180deg);
  }

  .header__number:hover {
    text-shadow: 0 0 15px lightCyan;
  }

  .header__elem {
    font-family: Roboto;
    font-weight: bold;
    cursor: pointer;
    height: 100px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    /*padding: 0px 30px;*/
    width: 100%;
  }
  .header__elem_block{
    display: flex;
    justify-content: center;
  }

  .header__elem:hover {
    color: #ffffff;
    text-shadow: 0px 0 15px lightCyan;
    background-color: rgba(0, 0, 0, .5);
  }

  .header__bascet {
    display: inline-block;
    width: 20px;
    height: 16px;
    background: url("./../assets/bascet.png") no-repeat;
    background-size: cover;
  }

  .header__bascet-number {
    font-size: 20px;
    display: inline-block;
    margin-left: 10px;
  }
  .header__popup{

  }
  .fade-enter-active, .fade-leave-active {
    transition: opacity .8s;
  }
  .fade-enter, .fade-leave-to {
    opacity: 0;
  }
  @media (max-width: 1080px) {

  }

</style>
