// import main from './modules/main/index'
import global from './modules/global/index'
import products from './modules/products/index'
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

const store = () => new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    global,
    products
  }
});
export default store;
