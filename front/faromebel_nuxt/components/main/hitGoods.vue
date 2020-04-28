<template>
  <div class="hit-goods">
    <template v-for="item in dataGoods" class="card-goods__block">
      <card-goods :data-object="item" v-bind:key="item.id"/>
    </template>
  </div>
</template>

<script>
  import CardGoods from "./../globalCamponents/cardGoods";

  export default {
    name: "hitGoods",
    components: {CardGoods},
    data() {
      return {
        dataGoods: [{
          id: 1,
          name: 'Афина',
          imgName: 'Afina',
          category: 'Спальный гарнитур',
          price: '10000',
          newPrice: '9000',
          long: '100',
          weight: '25',
          height: '34',
          inStock: true
        }, {
          id: 2,
          name: 'Элиана',
          imgName: 'Eliana',
          category: 'Спальный гарнитур',
          price: '10000',
          newPrice: '9000',
          long: '100',
          weight: '25',
          height: '35',
          inStock: false
        }, {
          id: 3,
          name: 'Венера',
          imgName: 'venera',
          category: 'Спальный гарнитур',
          price: '10000',
          newPrice: '9000',
          long: '10000',
          weight: '25000',
          height: '3600',
          inStock: true
        },{
          id: 4,
          name: 'Афина',
          imgName: 'Afina',
          category: 'Спальный гарнитур',
          price: '10000',
          newPrice: '9000',
          long: '100',
          weight: '25',
          height: '34',
          inStock: true
        }, {
          id: 5,
          name: 'Элиана',
          imgName: 'Eliana',
          category: 'Спальный гарнитур',
          price: '10000',
          newPrice: '9000',
          long: '100',
          weight: '25',
          height: '35',
          inStock: false
        }, {
          id: 6,
          name: 'Венера',
          imgName: 'venera',
          category: 'Спальный гарнитур',
          price: '10000',
          newPrice: '9000',
          long: '10000',
          weight: '25000',
          height: '3600',
          inStock: true
        }]
      }
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
