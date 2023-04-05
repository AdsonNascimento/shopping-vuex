import { createStore } from 'vuex'
import axios from 'axios';

export default createStore({
  state: {
    products: [],
    productsInBag: []
  },
  getters: {
  },
  mutations: {
    loadProducts(state, products) {
      console.log(products);
      state.products = products;
    },

    addToBag(state, product) {
      state.productsInBag.push(product);
    },

    removeFromBag(state, productId) {
      let updateBag = state.productsInBag.filter(item => productId != item.id);

      state.productsInBag = updateBag;
    }
  },
  actions: {
    loadProducts({ commit }) {
      axios
        .get("https://fakestoreapi.com/products")
        .then(response => {
          commit('loadProducts', response.data)
        })
    },

    addToBag({ commit }, product) {
      commit('addToBag', product);
    },

    removeFromBag({ commit }, productId) {
      commit('removeFromBag', productId);
    }
  },
  modules: {
  }
})
