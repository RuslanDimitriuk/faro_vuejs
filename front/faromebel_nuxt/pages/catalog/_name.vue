<template>
  <div>
    <div class="title-block">
      <h2 class="title">{{getTitle}}</h2>
    </div>
    <div class="products">
      <template v-for="item in livingRoomList" class="card-goods__block">
        <card-goods :data-object="item" v-bind:key="item.id"/>
      </template>
    </div>
  </div>
</template>

<script>
  import CardGoods from '../../components/globalCamponents/CardGoods';
  import {mapState, mapActions} from 'vuex';
  export default {
    name: "catalog",
    components: {CardGoods},
    computed: {
      ...mapState('products', ['livingRoomList']),
      getTitle() {
        switch (this.$route.params.name){
          case 'living_room': {
            return 'Гостиные гарнитуры';
          }
          case 'bedroom': {
            return 'Спальные гарнитуры';
          }
          case 'dining_room': {
            return 'Мебель в столовую';
          }
          case 'textile': {
            return 'Текстиль';
          }
          case 'accessories': {
            return 'АКСЕССУАРЫ';
          }
          case 'mattress': {
            return 'Матрасы';
          }
          default: {
            return 'Fuck';
          }
        }
      },
    },
    methods: {
      ...mapActions('products', ['getProduct'])
    },
    mounted() {
      switch (this.$route.params.name){
        case 'living_room': {
          this.getProduct({data: 'living_room', status: 'catalog'});
          break;
        }
        case 'bedroom': {
          this.getProduct({data: 'bedroom', status: 'catalog'});
          break;
        }
        case 'dining_room': {
          this.getProduct({data: 'dining_room', status: 'catalog'});
          break;
        }
        case 'textile': {
          this.getProduct({data: 'textile', status: 'catalog'});
          break;
        }
        case 'accessories': {
          this.getProduct({data: 'accessories', status: 'catalog'});
          break;
        }
        case 'mattress': {
          this.getProduct({data: 'mattress', status: 'catalog'});
          break;
        }
        default: {
          break
        }
      }
    }
  }
</script>

<style scoped>
.title-block{
  height: 210px;
  background: #f9fbff;
}
  .title{
    padding-top: 140px;
    text-align: center;
    text-transform: uppercase;
    font-size: 3vw;
    color: black;
  }
  .products{
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
  }
</style>
