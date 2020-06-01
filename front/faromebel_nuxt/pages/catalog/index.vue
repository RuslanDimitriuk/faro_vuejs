<template>
  <div>
    <div class="title-block">
      <h2>Все товары</h2>
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
        return 'Гостиные'
      },
    },
    methods: {
      ...mapActions('products', ['getProduct'])
    },
    mounted() {
      this.getProduct('all');
    }
  }
</script>

<style scoped>

</style>
