import { createStore } from 'vuex'

// import store modules
import { products } from './modules/products'

// Create a new store instance.
export default createStore({
  modules: {
    products
  }
})
