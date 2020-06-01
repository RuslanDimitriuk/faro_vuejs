<template>
  <div class="hit-goods">
    <template v-for="item in dataGoods" class="card-goods__block">
      <card-goods :data-object="item" v-bind:key="item.id"/>
    </template>
  </div>
</template>

<script>
  import CardGoods from "../globalCamponents/CardGoods";
  import {mapState, mapActions} from 'vuex';
  export default {
    name: "hitGoods",
    components: {CardGoods},
    computed: {
      ...mapState('products', ['dataGoods'])
    },
    methods: {
      ...mapActions('products', ['getProduct'])
    },
    mounted() {
      this.getProduct({data: 'hit_product', status: 'hit'});
    }
  }
</script>

<style scoped>
  .card-goods__block{
    position: relative;
  }
  .hit-goods{
    position: relative;
    padding: 20px 20px;
  }
</style>
