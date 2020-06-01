<template>
  <div>
    <the-header/>
    <navigation class="app__navigate" :class="{app__navigate_min : getPath}"/>
    <div>
      <nuxt class="main-conteiner" :class="{main_conteiner_min : getPath}"/>
    </div>
    <the-footer/>
  </div>
</template>
<script>
  import TheHeader from "../components/globalCamponents/TheHeader"
  import TheFooter from "../components/globalCamponents/TheFooter"
  import Navigation from "../components/globalCamponents/Navigation";

  export default {
    components: {Navigation, TheHeader, TheFooter},
    computed:{
      getPath() {
        if (this.$route.path === '/'){
          return false;
        } else {
          return true;
        }
      }
    }
  }
</script>
<style lang="scss">
  @import "./../node_modules/css-reset/reset.css";
  @font-face {
    font-family: 'Circe Light';
    src: url('./../static/fonts/Circe-Light.woff') format('woff'),
    url('./../static/fonts/Circe-Light.ttf') format('truetype');
    font-weight: normal;
    font-style: normal;
  }

  html {
    font-family: Circe Light, Roboto, Helvetica, sans-serif;
    font-size: 16px;
    word-spacing: 1px;
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    box-sizing: border-box;
  }

  *, *:before, *:after {
    box-sizing: border-box;
    margin: 0;
  }

  .button--green {
    display: inline-block;
    border-radius: 4px;
    border: 1px solid #3b8070;
    color: #3b8070;
    text-decoration: none;
    padding: 10px 30px;
  }

  .button--green:hover {
    color: #fff;
    background-color: #3b8070;
  }

  .button--grey {
    display: inline-block;
    border-radius: 4px;
    border: 1px solid #35495e;
    color: #35495e;
    text-decoration: none;
    padding: 10px 30px;
    margin-left: 15px;
  }

  .button--grey:hover {
    color: #fff;
    background-color: #35495e;
  }

  .app__navigate{
    position: relative;
    z-index: 10000;
    width: 310px;
    position: fixed;
    left: 0px;
    top: 0px;
    bottom: 0px;
  }
  .main-conteiner{
    margin-left: 310px;
  }

  $darkSlateGray: #1c3632;
  $teal: #366;
  $lightCyan: #9cc;
  $gainsboro: #ccc;
  $darkCyan: #399;
  $gray: #999;
  .app__navigate_min{
    width: 100px;
  }
  .main_conteiner_min{
    margin-left: 100px;
  }
  @media (max-width: 1080px) {
    .app__navigate {
     width: 100px;
   }
    .main-conteiner{
      margin-left: 100px;
    }
  }
</style>

