import { createStore } from 'vuex'

// import store modules
import { products } from './modules/products'
import {cart} from './modules/cart';

// Create a new store instance.
export default createStore({
  modules: {
    products,
    cart,
  }
})
