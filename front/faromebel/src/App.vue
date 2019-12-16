<template>
  <div id="app" class="app">
    <navigation class="app__navigate"/>
    <header_custom class="app__header"/>
    <div class="app__router">
      <router-view />
    </div>
    <footer_custom/>
  </div>
</template>

<script>
  import Navigation from "./components/Navigation";
  import Header_custom from "./components/Header_custom";
  import Footer_custom from "./components/Footer_custom";
  export default {
    components: {Navigation, Header_custom, Footer_custom}
  }
</script>

<style lang="scss">
  @import "~css-reset/reset.css";

  .app{
    &__navigate {
      width: 310px;
      position: fixed;
      left: 0px;
      top: 0px;
      bottom: 0px;
    }
    &__router{
      margin-left: 310px;
    }
    &__header {
      width: 100%;
      position: fixed;
      top: 0px;
    }
  }
  @font-face {
    font-family: Roboto;
    src: url(./assets/fonts/roboto-thin.ttf);
  }
  $darkSlateGray: #1c3632;
  $teal: #366;
  $lightCyan: #9cc;
  $gainsboro: #ccc;
  $darkCyan: #399;
  $gray: #999;
  @media (max-width: 1080px) {
    .app {
      &__navigate {
        width: 100px;
      }
    }
  }
</style>
