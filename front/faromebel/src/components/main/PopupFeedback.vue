<template>
  <div>
    <div class="triangle"></div>
    <div class="popup">
      <div class="popup__title-block">
        <div class="popup__title-block_elem" :class="{block_elem_c: isCurrentElement}" @click="isTelefon">Перезвоните мне</div>
        <div class="popup__title-block_elem" :class="{block_elem_c: !isCurrentElement}" @click="isQuestion">Задать вопрос</div>
      </div>
      <div v-if="isCurrentElement"><!--<div>-->
      <div class="popup__input-block">
        <div class="popup__input-title">Телефон</div>
        <input v-model="backCall.number" v-mask="'+7 (999) 999-99-99'" class="popup__input"/>
      </div>
        <div class="popup__input-block">
          <div class="popup__input-title">Имя</div>
          <input v-model="backCall.name" class="popup__input"/>
        </div>
        <div class="popup__btn-block">
          <button class="popup__btn">Отправить заявку</button>
        </div>
      </div>
      <div v-else>
        hello
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "PopupFeedback",
    data() {
      return {
        isCurrentElement: true,
        backCall: {
          name: '',
          number: '',
        }
      }
    },
    props: {
      showPopupFeedback: {
        type: Boolean,
        default: false
      }
    },
    methods: {
      isTelefon() {
        this.isCurrentElement = true;
      },
      isQuestion() {
        this.isCurrentElement = false;
      },
      closePopup() {
        this.$emit('update:showPopupFeedback', false);
      }
    }
  }
</script>

<style scoped>
  .popup {
    position: absolute;
    left: 100px;
    top: 110px;
    content: '';
    width: 280px;
    background-color: rgba(255, 255, 255, .8);
    border-radius: 5px;
  }

  .triangle {
    position: absolute;
    left: 232px;
    top: 100px;
    width: 0;
    height: 0;
    border-left: 7px solid transparent;
    border-right: 7px solid transparent;
    border-bottom: 10px solid rgba(255, 255, 255, .8);
  }
  .popup__title-block{
    display: flex;
    justify-content: space-around;
    margin: 20px 0px;
  }
  .popup__title-block_elem{
    color: #000000;
    font-size: 16px;
    cursor: pointer;
  }
  .block_elem_c{
    text-decoration: underline;
  }
  .popup__input-block{
    margin-bottom: 20px;
  }
  .popup__input{
    height: 30px;
    width: 90%;
    font-size: 18px;
    color: #000;
    margin-left: 4%;
  }
  .popup__input-title{
    margin-left: 10px;
    margin-bottom: 15px;
    font-size: 18px;
    color: #000;
  }
  .popup__btn-block{
    display: flex;
    justify-content: center;
    margin-bottom: 15px;
  }
  .popup__btn{
    width: 80%;
    height: 40px;
    color: #000000;
    background-color: darkCyan;
    font-size: 24px;
    border-radius: 5px;
    box-shadow: 0 0 10px 5px rgba(221, 221, 221, 1);
  }
  .popup__btn:hover {
    font-family: Roboto;
    transition: 300ms;
    background-color: lightCyan;
  }
</style>
