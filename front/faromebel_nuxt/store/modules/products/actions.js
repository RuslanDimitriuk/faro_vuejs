import * as types from './mutation-types'

export default {
  async getProduct(context, payload) {
    let productList = await  this.$axios.$get(`/api/${payload.data}`);
    if (payload.status === 'catalog') {
      context.commit(types.ADD_PRODUCT_IN_LIST, productList);
    }
    if (payload.status === 'product') {
      context.commit(types.ADD_CURRENT_TOVAR, productList);
    }
    if (payload.status === 'hit') {
      context.commit(types.ADD_HIT_TOVAR, productList);
    }
  }
}
