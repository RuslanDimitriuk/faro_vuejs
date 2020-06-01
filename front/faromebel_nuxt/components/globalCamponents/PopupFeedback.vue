<template>
  <div class="forms">
    <div class="triangle"></div>
    <div class="popup">
      <div class="popup__title-block">
        <div class="popup__title-block_elem" :class="{block_elem_c: isCurrentElement}" @click="isTelefon">Перезвоните
          мне
        </div>
        <div class="popup__title-block_elem" :class="{block_elem_c: !isCurrentElement}" @click="isQuestion">Задать
          вопрос
        </div>
      </div>
      <div v-if="isCurrentElement">
        <ValidationObserver v-slot="{ handleSubmit}">
          <form @submit.prevent="handleSubmit(onSubmitCalBack)">
            <ValidationProvider v-slot="{ errors }" name="userNumber" rules="required|userNumber">
              <div class="popup__input-block">
                <div class="popup__input-title">Телефон</div>
                <input v-model="number" v-mask="'+7 (999) 999-99-99'" class="popup__input"
                       :class="{input_invalid: errors[0]}"/>
                <div class="input-invalid-message"><span>{{ errors[0] }}</span></div>
              </div>
            </ValidationProvider>
            <ValidationProvider v-slot="{ errors }" name="name" rules="required|userName">
              <div class="popup__input-block">
                <div class="popup__input-title">Имя</div>
                <input v-model="nameCalBack" class="popup__input" :class="{input_invalid: errors[0]}"/>
                <div class="input-invalid-message"><span>{{ errors[0] }}</span></div>
              </div>
            </ValidationProvider>
            <div class="popup__btn-block">
              <button class="popup__btn" type="submit">Отправить заявку</button>
            </div>
          </form>
        </ValidationObserver>
      </div>
      <div v-else>
        <ValidationObserver v-slot="{ handleSubmit}">
          <form @submit.prevent="handleSubmit(onSubmitQuestion)">
            <ValidationProvider v-slot="{ errors }" name="userNumber" rules="required">
              <div class="popup__textarea-block">
                <div class="popup__input-title">Ваш вопрос</div>
                <textarea v-model="question" class="popup__textarea" :class="{input_invalid: errors[0]}"
                          maxlength="500"/>
                <div class="input-invalid-message"><span>{{ errors[0] }}</span></div>
              </div>
            </ValidationProvider>
            <ValidationProvider v-slot="{ errors }" name="name" rules="required|userName">
              <div class="popup__input-block">
                <div class="popup__input-title">Имя</div>
                <input v-model="questionObjectName" class="popup__input" :class="{input_invalid: errors[0]}"/>
                <div class="input-invalid-message"><span>{{ errors[0] }}</span></div>
              </div>
            </ValidationProvider>
            <ValidationProvider v-slot="{ errors }" name="email" rules="required|email">
              <div class="popup__input-block">
                <div class="popup__input-title">Электронная почта</div>
                <input v-model="email" class="popup__input" :class="{input_invalid: errors[0]}"
                       type="text"/>
                <div class="input-invalid-message"><span>{{ errors[0] }}</span></div>
              </div>
            </ValidationProvider>
            <div class="popup__btn-block">
              <button class="popup__btn" type="submit">Задать вопрос</button>
            </div>
          </form>
        </ValidationObserver>
      </div>
    </div>
  </div>
</template>

<script>
  import {ValidationObserver, ValidationProvider} from "vee-validate";
  import {mapState, mapMutations, mapActions} from 'vuex';

  export default {
    name: "PopupFeedback",
    components: {ValidationObserver, ValidationProvider},
    data() {
      return {
        isCurrentElement: true,
      }
    },
    computed: {
      number: {
        get () {
          return this.backCall.number
        },
        set (value) {
          this.SET_DATA_FORM({
            name: 'number',
            data: value
          })
        }
      },
      nameCalBack: {
        get () {
          return this.backCall.name
        },
        set (value) {
          this.SET_DATA_FORM({
            name: 'nameCalBack',
            data: value
          })
        }
      },
      question: {
        get () {
          return this.questionObject.question
        },
        set (value) {
          this.SET_DATA_FORM({
            name: 'question',
            data: value
          })
        }
      },
      questionObjectName: {
        get () {
          return this.questionObject.name
        },
        set (value) {
          this.SET_DATA_FORM({
            name: 'questionObjectName',
            data: value
          })
        }
      },
      email: {
        get () {
          return this.questionObject.email
        },
        set (value) {
          this.SET_DATA_FORM({
            name: 'email',
            data: value
          })
        }
      },
      ...mapState('global', ['backCall', 'questionObject', 'showPopupFeedback']),
    },
    methods: {

      onSubmitCalBack() {
        this.closePopup();
      },
      onSubmitQuestion() {
        this.closePopup();
      },
      isTelefon() {
        this.isCurrentElement = true;
      },
      isQuestion() {
        this.isCurrentElement = false;
      },
      closePopup() {
        this.EDIT_STATUS_SHOW(false);
      },
      ...mapMutations('global', ['EDIT_STATUS_SHOW','SET_DATA_FORM'])
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
    background-color: rgba(255, 255, 255, 1);
    border-radius: 5px;
    z-index: 909099;
  }

  .triangle {
    position: absolute;
    left: 232px;
    top: 100px;
    width: 0;
    height: 0;
    border-left: 7px solid transparent;
    border-right: 7px solid transparent;
    border-bottom: 10px solid rgba(255, 255, 255, 1);
  }

  .popup__title-block {
    display: flex;
    justify-content: space-around;
    margin: 20px 0px;
  }

  .popup__title-block_elem {
    color: #000000;
    font-size: 16px;
    cursor: pointer;
  }

  .block_elem_c {
    text-decoration: underline;
  }

  .popup__input-block {
    height: 65px;
    margin-bottom: 20px;
  }

  .popup__textarea-block {
    height: 195px;
    margin-bottom: 20px;
  }

  .popup__input {
    border: none;
    border-bottom: 2px solid teal;
    background: lightCyan;
    border-radius: 3px;
    height: 30px;
    width: 90%;
    font-size: 18px;
    color: #000;
    margin-left: 4%;
  }

  .popup__textarea {
    border: none;
    border-bottom: 2px solid teal;
    background: lightCyan;
    border-radius: 3px;
    height: 160px;
    width: 90%;
    font-size: 14px;
    color: #000;
    margin-left: 4%;
    resize: none;
  }

  .popup__input-title {
    margin-left: 10px;
    margin-bottom: 10px;
    font-size: 18px;
    color: #000;
  }

  .popup__btn-block {
    display: flex;
    justify-content: center;
    margin-bottom: 15px;
  }

  .popup__btn {
    width: 80%;
    height: 40px;
    color: #000000;
    background-color: darkCyan;
    font-size: 24px;
    border-radius: 5px;
    box-shadow: 0 0 10px 5px rgba(221, 221, 221, 1);
  }

  .popup__btn:hover {
    font-family: Circe Light, Roboto, Helvetica, sans-serif;
    transition: 300ms;
    background-color: lightCyan;
  }

  .input-invalid-message {
    padding: 5px 10px 0 10px;
    color: #f00;
  }

  .forms :focus {
    outline: none;
    box-shadow: 0 0 10px 5px darkCyan;
    border: 1px solid darkCyan;
    border-radius: 3px;
  }

  .input_invalid {
    border-bottom: 2px solid #f00;
  }
</style>
