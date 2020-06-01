<template>
  <div>
    <client-only>
      <modal name="selectedProduct"
             :clickToClose="false"
             :scrollable="true"
             :reset="true" >
        Товар добавлен в карзину
        <button @click="$modal.hide('selectedProduct')">Выйти</button>
      </modal>
    </client-only>
  </div>
</template>

<script>
  export default {
    name: "AfterSelectionProduct",
    methods: {
      showModalSelected() {
        this.$modal.show('selectedProduct-world');
      }
    }
  }
</script>

<style scoped>

</style>
