import axios from 'axios'

export const products = {
  state: {
    products: [],
    max: 50,
  },

  mutations: {
    setProducts: (state, payload) => state.products = payload,
    setMax: (state, payload) => state.max = payload,
  },

  getters: {
    filteredProducts: (state) => state.products.filter(item => item.price < state.max)
  },

  actions: {
    getProducts: async context => {
        const {data} = await axios.get('https://hplussport.com/api/products/order/price')
        context.commit('setProducts', data)
    }
  }
}
