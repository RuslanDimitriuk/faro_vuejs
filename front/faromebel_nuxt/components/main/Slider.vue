<template>
  <hooper :progress="true" :autoPlay="true" :playSpeed="6000" :infiniteScroll="true" :transition="6500">
    <slide>
      <div class="main__slider slide1">
      </div>
    </slide>
    <slide>
      <div class="main__slider slide2">
      </div>
    </slide>
    <slide>
      <div class="main__slider slide3">
      </div>
    </slide>
    <slide>
      <div class="main__slider slide4">
      </div>
    </slide>
    <hooper-navigation slot="hooper-addons"></hooper-navigation>
  </hooper>
</template>

<script>
  import { Hooper, Slide, Navigation as HooperNavigation} from 'hooper';
  import 'hooper/dist/hooper.css';

  export default {
    name: "slider",
    components: {
      Hooper,
      Slide,
      HooperNavigation
    },
    data() {
      return {
        count: 1
      }
    },
    methods: {

    },

  }
</script>

<style scoped>
  .main__slider {
    height: 500px;
  }

  .slide1 {
    background: url("./../../static/baners/baner1.jpg");
    background-size: cover;
  }

  .slide2 {
    background: url("./../../static/baners/baner2.jpg");
    background-size: cover;
  }

  .slide3 {
    background: url("./../../static/baners/baner3.jpg");
    background-size: cover;
  }

  .slide4 {
    background: url("./../../static/baners/baner4.jpg");
    background-size: cover;
  }
</style>
