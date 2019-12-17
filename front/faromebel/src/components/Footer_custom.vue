<template>
  <div class="footer">
    <div class="footer__contacts footer-block">
      <span class="footer__title">Контакты</span>
      <div class="footer__block-body">
        <div class="footer__block-element">
          <div>Наши телефоны</div>
          <div>
            <div class="footer__number">(921) 860-85-53</div>
            <div class="footer__number">(921) 373-29-13</div>
          </div>
        </div>
        <div class="footer__block-element">
          <div>Адрес</div>
          <div class="footer__text">
            <a class="link" href="https://yandex.by/maps/-/CGcLIUzr" target="_blank">
              Санкт-Петербург, наб. Обводного канала, 138
            </a>
          </div>
        </div>
        <div class="footer__block-element">
          <div>Электронная почта</div>
          <div class="footer__text">
            <a class="link" href="mailto:faromebel@yandex.ru" target="_blank">faromebel@yandex.ru</a>
          </div>
        </div>
      </div>
    </div>
    <div class="footer_operating-mode footer-block">
      <span class="footer__title">Режим работы</span>
      <div class="footer__block-element">ПН - ПТ: 10:00 - 19:00</div>
      <div>СБ - ВС: 10:00 - 16:00</div>
      <div class="footer__text">(и дольше по предварительному созвону)</div>
    </div>
    <div class="footer_catalog footer-block">
      <span class="footer__title">Каталог</span>
      <div class="footer__block-element footer__block-element-link">Гостиные гарнитуры</div>
      <div class="footer__block-element footer__block-element-link">Спальные гарнитуры</div>
      <div class="footer__block-element footer__block-element-link">Мебель в столовую</div>
      <div class="footer__block-element footer__block-element-link">Текстиль</div>
      <div class="footer__block-element footer__block-element-link">Аксессуары</div>
      <div class="footer__block-element footer__block-element-link">Матрасы</div>
    </div>
    <div class="footer_information footer-block">
      <span class="footer__title">Информация</span>
      <div class="footer__block-element footer__block-element-link">О компании</div>
      <div class="footer__block-element footer__block-element-link">Мы - не магазин!</div>
      <div class="footer__block-element footer__block-element-link">Доставка, сборка</div>
      <div class="footer__block-element footer__block-element-link">Способы оплаты</div>
      <div class="footer__block-element footer__block-element-link">Гарантия</div>
    </div>
    <div class="footer_social footer-block">
      <span class="footer__title">Мы в соцсетях</span>
      <div>
        <a href="https://vk.com/faromebelru" target="_blank"><div class="social-element bg-vk40_min"></div></a>
        <a href="https://www.youtube.com/channel/UCUx7-2NKQrMrXCp3mvAn-8g" target="_blank"><div class="social-element bg-youtube40_min"></div></a>
        <a href="https://www.instagram.com/faromebel.ru/" target="_blank"><div class="social-element bg-insta40_min"></div></a>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Footer"
  }
</script>

<style scoped>
  .link{
    text-decoration: none;
    color: darkSlateGray;
  }
  .footer {
    font-family: "Helvetica Neue", "HelveticaNeue", Helvetica, Arial, "Lucida Grande", sans-serif;
    margin-left: 310px;
    width: calc(100% - 310px);
    background-color: #f9fbff;
    display: flex;
    justify-content: space-around;
  }

  .footer-block {
    width: 20%;
    padding: 10px;
  }

  .footer__title {
    color: #000000;
    font-size: 16px;
  }
  .footer__block-body{
    margin: 20px 0px;
  }
  .footer__block-element{
    margin: 20px 0px;
  }
  .footer__block-element-link:hover{
    color: #000000;
    font-weight: bold;
    transform: scale(1.05);
    cursor: pointer;
  }
  .social-element{
    margin: 20px 10px 10px 10px;
    display: inline-block;
    width: 40px;
    height: 40px;
    cursor: pointer;
  }
  .social-element:hover{
    transform: scale(1.2);
  }
  .bg-insta40_min {
    width: 40px; height: 40px;
    background: url('./../assets/social_sprites.png') -20px -20px;
  }
  .bg-vk40_min {
    width: 40px; height: 40px;
    background: url('./../assets/social_sprites.png') -20px -100px;
  }
  .bg-youtube40_min {
    width: 40px; height: 40px;
    background: url('./../assets/social_sprites.png') -100px -20px;
  }
  .footer__number{
    margin-top: 5px;
  }
  .footer__text{
    margin-top: 5px;
  }
</style>
