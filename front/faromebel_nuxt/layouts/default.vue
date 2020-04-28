<template>
  <div>
    <the-header class="header"/>
    <navigation class="app__navigate"/>
    <div>
      <nuxt class="main-conteiner"/>
    </div>
    <the-footer/>
  </div>
</template>
<script>
  import TheHeader from "../components/globalCamponents/TheHeader"
  import TheFooter from "../components/globalCamponents/TheFooter"
  import Navigation from "../components/globalCamponents/Navigation";

  export default {
    components: {Navigation, TheHeader, TheFooter}
  }
</script>
<style lang="scss">
  @import "./../node_modules/css-reset/reset.css";

  html {
    font-family: "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
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
    width: 310px;
    position: fixed;
    left: 0px;
    top: 0px;
    bottom: 0px;
  }
  .main-conteiner{
    margin-left: 310px;
  }
  .header{
    width: 100%;
    position: fixed;
    top: 0px;
  }
  @font-face {
    font-family: Roboto;
    src: url(./../static/fonts/roboto-thin.ttf);
  }
  $darkSlateGray: #1c3632;
  $teal: #366;
  $lightCyan: #9cc;
  $gainsboro: #ccc;
  $darkCyan: #399;
  $gray: #999;
  @media (max-width: 1080px) {
    .app__navigate {
     width: 100px;
   }
    .main-conteiner{
      margin-left: 100px;
    }
  }
</style>

