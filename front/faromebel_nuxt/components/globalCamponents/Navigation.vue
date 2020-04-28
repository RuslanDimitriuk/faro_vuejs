<template>
  <div class="navigation">
    <div class="logo" @click="linkMain">
      <div class="logo-img">
      </div>
      <div class="title">
        <span class="title-text">Хорошая мебель! Хорошим людям!</span>
      </div>
    </div>
    <nav>
      <ul>
        <li class="navigation__element">
          <div class="navigation__element-box">
            <div class="navigation__label"></div>
            <span class="navigation__element-title">Гостиные гарнитуры</span>
          </div>
        </li>
        <li class="navigation__element">
          <div class="navigation__element-box">
            <div class="navigation__label"></div>
            <span class="navigation__element-title">Спальные гарнитуры</span>
          </div>
        </li>
        <li class="navigation__element">
          <div class="navigation__element-box">
            <div class="navigation__label"></div>
            <span class="navigation__element-title">Мебель в столовую</span>
          </div>
        </li>
        <li class="navigation__element">
          <div class="navigation__element-box">
            <div class="navigation__label"></div>
            <span class="navigation__element-title">Текстиль</span>
          </div>
        </li>
        <li class="navigation__element">
          <div class="navigation__element-box">
            <div class="navigation__label"></div>
            <span class="navigation__element-title">Аксессуары</span>
          </div>
        </li>
        <li class="navigation__element">
          <div class="navigation__element-box">
            <div class="navigation__label"></div>
            <span class="navigation__element-title">Матрасы</span>
          </div>
        </li>
      </ul>
    </nav>
    <div class="navigation__footer">
      <div class="navigation__label"></div>
      <span class="navigation__element-title">О компании</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: "navigation",
    methods: {
      linkMain() {
        if (window.location.pathname !== '/') {
          this.$router.push('/');
        }
      }
    }
  }
</script>

<style scoped>
  .navigation {
    background-color: lightCyan;
    box-shadow: 0 0 15px 1px rgba(0, 0, 0, .4);
  }
  .logo {
    display: flex;
    cursor: pointer;
    background-color: rgba(17, 109, 130, .1);
    box-shadow: 0 10px 15px -4px rgba(0, 0, 0, .2);
  }

  .logo-img {
    width: 100px;
    height: 100px;
    background: url("./../../static/logo.png") no-repeat;
    background-size: cover;
  }

  .title {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 210px;
  }
  .title-text{
    font-family: "Helvetica Neue", "HelveticaNeue", Helvetica, Arial, "Lucida Grande", sans-serif;
    color: darkSlateGray;
    font-size: 23px;
   line-height: 24px;
    font-weight: bold;
  }
  .navigation__label {
    display: inline-block;
    width: 64px;
    height: 64px;
    background: url("./../../static/logo.png");
    background-size: cover;
  }

  .navigation__element {
    cursor: pointer;
    margin: 10px 0px;
  }

  .navigation__element:hover {
    background-color: teal;
  }

  .navigation__element-box {
    display: flex;
    color: darkSlateGray;
  }

  .navigation__element-title {
    font-family: Roboto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-left: 10px;
    font-size: 22px;
    font-weight: bold;
  }
  .navigation__element-box:hover {
    color: white;
    box-shadow: 0 0 15px 1px rgba(0, 0, 0, .8);
  }
  .navigation__footer{
    width: 100%;
    border-top: solid 2px rgba(128,128,128, .3);
    padding-top: 10px;
    position: absolute;
    bottom: 0px;
    display: flex;
    cursor: pointer;
    color: darkSlateGray;
  }
  .navigation__footer:hover{
    background-color: teal;
    color: white;
    box-shadow: 0 0 15px 1px rgba(0, 0, 0, .8);
  }

  @media (max-width: 1080px) {
    .navigation__element-title{
      display: none;
    }
    .title{
      display: none;
    }
    .navigation__element-box{
      justify-content: center;
    }
    .navigation__footer {
      display: flex;
      justify-content: center;
    }
  }
</style>
