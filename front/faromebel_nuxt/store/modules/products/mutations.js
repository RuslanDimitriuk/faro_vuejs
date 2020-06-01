import * as types from './mutation-types'

export default {
  [types.ADD_PRODUCT_IN_LIST](state, payload) {
    state.livingRoomList = payload;
  },
  [types.ADD_CURRENT_TOVAR](state, payload) {
    state.currentProduct = payload;
  },
  [types.ADD_HIT_TOVAR](state, payload) {
    state.dataGoods = payload;
  }
}
