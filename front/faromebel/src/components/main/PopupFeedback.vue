<template>
  <div>
    <div class="triangle"></div>
    <div class="popup">
      <!--<div>-->
        <!--<input v-model="popupFeedback.name"/>-->
      <!--</div>-->
      <!--<div>-->
        <!--<input v-model="popupFeedback.number"/>-->
      <!--</div>-->
      <!--<button @click="closePopup">Закрыть</button>-->
      <!--<button>Отправить</button>-->
    </div>
  </div>
</template>

<script>
  export default {
    name: "PopupFeedback",
    data() {
      return {
        popupFeedback: {
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
    height: 340px;
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
</style>
