<template>
  <div class="navigation">
    <div class="logo" @click="linkMain">
      <div class="logo-img">
      </div>
      <div class="title" :class="{navigatin_none : getPath}">
        <span class="title-text">Хорошая мебель! Хорошим людям!</span>
      </div>
    </div>
    <nav>
      <ul>
        <li class="navigation__element">
          <nuxt-link :to="{name: 'catalog-name', params: { name:'living_room' } }" class="link">
            <div class="navigation__element-box">
              <div class="navigation__label bg-living_room" :class="{label_center : getPath}"></div>
              <span class="navigation__element-title" :class="{navigatin_none : getPath}">Гостиные гарнитуры</span>
            </div>
            <div class="title-hover" :class="{title_new : getPath}">Гостиные гарнитуры</div>
          </nuxt-link>
        </li>
        <li class="navigation__element">
          <nuxt-link :to="{name: 'catalog-name', params: { name:'bedroom' } }" class="link">
            <div class="navigation__element-box">
              <div class="navigation__label bg-bed_room" :class="{label_center : getPath}"></div>
              <span class="navigation__element-title" :class="{navigatin_none : getPath}">Спальные гарнитуры</span>
            </div>
            <div class="title-hover" :class="{title_new : getPath}">Спальные гарнитуры</div>
          </nuxt-link>
        </li>
        <li class="navigation__element">
          <nuxt-link :to="{name: 'catalog-name', params: { name:'dining_room' } }" class="link">
            <div class="navigation__element-box">
              <div class="navigation__label bg-dining_room" :class="{label_center : getPath}"></div>
              <span class="navigation__element-title" :class="{navigatin_none : getPath}">Мебель в столовую</span>
            </div>
            <div class="title-hover" :class="{title_new : getPath}">Мебель в столовую</div>
          </nuxt-link>
        </li>
        <li class="navigation__element">
          <nuxt-link :to="{name: 'catalog-name', params: { name:'textile' } }" class="link">
            <div class="navigation__element-box">
              <div class="navigation__label bg-textile" :class="{label_center : getPath}"></div>
              <span class="navigation__element-title" :class="{navigatin_none : getPath}">Текстиль</span>
            </div>
            <div class="title-hover" :class="{title_new : getPath}">Текстиль</div>
          </nuxt-link>
        </li>
        <li class="navigation__element">
          <nuxt-link :to="{name: 'catalog-name', params: { name:'accessories' } }" class="link">
            <div class="navigation__element-box">
              <div class="navigation__label bg-accessories" :class="{label_center : getPath}"></div>
              <span class="navigation__element-title" :class="{navigatin_none : getPath}">Аксессуары</span>
            </div>
            <div class="title-hover" :class="{title_new : getPath}">Аксессуары</div>
          </nuxt-link>
        </li>
        <li class="navigation__element">
          <nuxt-link :to="{name: 'catalog-name', params: { name:'mattress' } }" class="link">
            <div class="navigation__element-box">
              <div class="navigation__label bg-mattress" :class="{label_center : getPath}"></div>
              <span class="navigation__element-title" :class="{navigatin_none : getPath}">Матрасы</span>
            </div>
            <div class="title-hover" :class="{title_new : getPath}">Матрасы</div>
          </nuxt-link>
        </li>
      </ul>
    </nav>
    <div class="link-footer">
    <nuxt-link to="/" class="link">
      <div class="navigation__footer">
        <div class="navigation__label bg-about_us" :class="{label_center : getPath}"></div>
        <span class="navigation__element-title" :class="{navigatin_none : getPath}">О компании</span>
      </div>
      <div class="title-hover title-footer-nav" :class="{title_new : getPath}">О компании</div>
    </nuxt-link>
    </div>
  </div>
</template>

<script>
  export default {
    name: "navigation",
    computed: {
      getPath() {
        if (this.$route.path === '/') {
          return false;
        } else {
          return true;
        }
      }
    },
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
  .title-hover {
    font-family: Circe Light, Roboto, Helvetica, sans-serif;;
    z-index: 1;
    position: absolute;
    width: 300px;
    left: -300px;
    height: 64px;
    line-height: 48px;
    top: 0;
    color: #fff;
    text-align: center;
    font-size: 24px;
    padding-top: 6px;
    background: teal;
  }

  .title-hover:hover {
    background-color: lightCyan;
    color: black;
    box-shadow: 0 0 15px 1px rgba(0, 0, 0, .4);
  }

  .navigation__element:hover .title_new, .link-footer:hover .title_new{
    transition: 1s;
    left: 100px;
  }

  .link {
    text-decoration: none;
  }
.link-footer{
  bottom: 0;
}

  .title-footer-nav {
    z-index: 1;
    position: absolute;
    width: 300px;
    left: -300px;
    height: 64px;
    line-height: 48px;
    top: calc(100vh - 70px);
    color: #fff;
    text-align: center;
    font-size: 24px;
    padding-top: 6px;
    background: teal;
  }

  .title-footer-nav:hover {
    background-color: lightCyan;
    color: black;
    box-shadow: 0 0 15px 1px rgba(0, 0, 0, .4);
  }
  .navigation {
    background-color: lightCyan;
    box-shadow: 0 0 15px 1px rgba(0, 0, 0, .4);
  }

  .logo {
    position: relative;
    z-index: 5;
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

  .title-text {
    font-family: Circe Light, Roboto, Helvetica, sans-serif;
    color: darkSlateGray;
    font-size: 23px;
    line-height: 24px;
    font-weight: bold;
  }

  .navigation__label {
    z-index: 2;
    display: inline-block;
    width: 64px;
    height: 64px;
  }

  .label_center {
    margin: auto;
  }

  .navigation__element {
    z-index: 0;
    position: relative;
    cursor: pointer;
    margin: 15px 0px;
  }

  .navigation__element:hover {
    background-color: teal;
  }

  .navigation__element-box {
    z-index: 2;
    background: lightCyan;
    position: relative;
    display: flex;
    color: darkSlateGray;
  }

  .navigation__element-box:hover {
    background-color: teal;
  }

  .navigation__element-title {
    font-family: Circe Light, Roboto, Helvetica, sans-serif;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-left: 10px;
    font-size: 24px;
    /*font-weight: bold;*/
  }

  .navigation__element-box:hover {
    color: white;
    box-shadow: 0 0 15px 1px rgba(0, 0, 0, .8);
  }

  .navigation__footer {
    z-index: 5;
    width: 100%;
    border-top: solid 2px rgba(128, 128, 128, .3);
    padding-top: 10px;
    position: absolute;
    bottom: 0px;
    display: flex;
    cursor: pointer;
    color: darkSlateGray;
  }

  .navigation__footer:hover {
    background-color: teal;
    color: white;
    box-shadow: 0 0 15px 1px rgba(0, 0, 0, .8);
  }

  .navigatin_none {
    display: none;
  }

  .bg-about_us {
    width: 64px;
    height: 64px;
    background: url('./../../static/sprites_nav.png') -40px -40px;
  }

  .bg-accessories {
    width: 64px;
    height: 64px;
    background: url('./../../static/sprites_nav.png') -184px -40px;
  }

  .bg-dining_room {
    width: 64px;
    height: 64px;
    background: url('./../../static/sprites_nav.png') -40px -184px;
  }

  .bg-living_room {
    width: 64px;
    height: 64px;
    background: url('./../../static/sprites_nav.png') -184px -184px;
  }

  .bg-textile {
    width: 64px;
    height: 64px;
    background: url('./../../static/sprites_nav.png') -328px -40px;
  }

  .bg-bed_room {
    width: 64px;
    height: 64px;
    background: url('./../../static/sprites_nav.png') -328px -184px;
  }

  .bg-mattress {
    width: 64px;
    height: 64px;
    background: url('./../../static/sprites_nav.png') -40px -328px;
  }

  @media (max-width: 1080px) {
    .navigation__element-title {
      display: none;
    }

    .title {
      display: none;
    }

    .navigation__element-box {
      justify-content: center;
    }

    .navigation__footer {
      display: flex;
      justify-content: center;
    }
  }
</style>
