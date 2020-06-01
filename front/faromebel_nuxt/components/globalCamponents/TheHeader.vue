<template>
  <div class="header" :class="[{header_not_view : viewHeader},{header_min : getPath}]">
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
          <div class="header__bascet-number" v-show="buys.length !== 0">{{buys.length}}</div>
        </div>
      </li>
    </ul>
    <transition name="fade">
      <popup-feedback class="header__popup" v-show="showPopupFeedback" :show-popup-feedback.sync="showPopupFeedback"/>
    </transition>
  </div>
</template>

<script>
  import PopupFeedback from "./../globalCamponents/PopupFeedback";
  import {mapState, mapMutations, mapActions} from 'vuex';

  export default {
    name: "Header",
    components: {PopupFeedback},
    data() {
      return {
        oldScrollY: 0,
        viewHeader: false,
      }
    },
    computed: {
      getPath() {
        if (this.$route.path === '/'){
          return false;
        } else {
          return true;
        }
      },
      ...mapState('global', ['numberPay','showPopupFeedback','statusNumber','buys'])
    },
    methods: {
      clickNumber() {
        this.EDIT_STATUS_SHOW(!this.showPopupFeedback);
      },
      ...mapMutations('global', ['EDIT_STATUS_SHOW'])
    },
    mounted() {
      window.onscroll = () => {
        let scrolled = window.pageYOffset || document.documentElement.scrollTop;
        let dY = scrolled - this.oldScrollY;
        if (dY > 0) {
          this.viewHeader = true;
          this.EDIT_STATUS_SHOW(false);
        } else {
          this.viewHeader = false;
        }

        this.oldScrollY = scrolled;
      }

    }
  }
</script>

<style scoped>
  .header {
    font-family: Circe Light, Roboto, Helvetica, sans-serif;
    transition: .5s;
    position: fixed;
    top: 0px;
    z-index: 100;
    width: calc(100% - 310px);
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100px;
    background-color: rgba(0, 0, 0, .3);
    margin-left: 310px;
  }

  .header_not_view {
    transition: .5s;
    top: -110px;
  }

  .header__nav {
    width: 80%;
    display: flex;
    justify-content: space-around;
    font-size: 22px;
    color: #ffffff;
  }

  .header__number {
    display: flex;
    justify-content: center;
    font-weight: bold;
    cursor: pointer;
    width: 300px;
  }

  .header__number-arrow {
    width: 20px;
    height: 20px;
    background: url("./../../static/arrow.png");
    background-size: cover;
    margin-left: 10px;
    transform: rotate(180deg);
    transition: .5s;
  }

  .header__number_arrow_rotate {
    transition: .5s;
    transform: rotate(0deg);
  }

  .header__number:hover {
    text-shadow: 0 0 15px lightCyan;
  }

  .header__elem {
    /*font-weight: bold;*/
    cursor: pointer;
    height: 100px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    /*padding: 0px 30px;*/
    width: 100%;
  }

  .header__elem_block {
    display: flex;
    justify-content: center;
  }

  .header__elem:hover {
    color: #ffffff;
    text-shadow: 0px 0 15px lightCyan;
    background-color: rgba(0, 0, 0, .6);
  }

  .header__bascet {
    display: inline-block;
    width: 36px;
    height: 36px;
    background: url("./../../static/basket.png") no-repeat;
    background-size: cover;
  }

  .header__bascet-number {
    font-size: 20px;
    display: inline-block;
    margin-left: 10px;
  }

  .header__popup {

  }

  .fade-enter-active, .fade-leave-active {
    transition: opacity .8s;
  }

  .fade-enter, .fade-leave-to {
    opacity: 0;
  }

  .header_min{
    width: calc(100% - 100px);
    margin-left: 100px;
  }

  @media (max-width: 1080px) {
    .header {
      width: calc(100% - 100px);
      margin-left: 100px;
    }
    .header__nav{
      width: 100%;
    }

  }

</style>
