<template>
  <div class="container">
    <h1>Checkout</h1>

    <table class="table table-hover" v-if="cart.length">
      <caption class="text-right h3">
        <b>Total: </b>
        <curr :amt="cartTotal"></curr>
      </caption>
      <thead>
        <tr>
          <th scope="col"></th>
          <th scope="col">Item</th>
          <th scope="col" class="text-center">Qty</th>
          <th scope="col" class="text-right">Price</th>
          <th scope="col" class="text-right">Sub-total</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, idx) in cart" :key="item.product.id">
          <td class="text-center">
            <div class="btn-group" role="group" aria-label="Basic example">
              <button @click="addItem(item.product)" class="btn btn-success">
                +
              </button>
              <button @click="deleteItem(idx)" class="btn btn-outline-success">
                -
              </button>
            </div>
          </td>
          <th scope="row">{{ item.product.name }}</th>
          <td class="text-center">{{ item.qty }}</td>
          <td class="text-right">
            <curr :amt="item.product.price"></curr>
          </td>
          <td class="text-right">
            <curr :amt="item.qty * item.product.price"></curr>
          </td>
        </tr>
      </tbody>
    </table>
    <router-link class="btn btn-sm btn-success" to="/"
      >Keep Shopping</router-link
    >
  </div>
</template>
<script>
import Curr from '@/components/Curr.vue'
import { mapState, mapMutations, mapGetters } from 'vuex'

export default {
  components: { Curr },
  methods: {
    ...mapMutations(['addItem', 'deleteItem'])
  },
  computed: {
    ...mapState({ cart: state => state.cart.cart }),
    ...mapGetters(['cartTotal', 'cartQty'])
  }
}
</script>

<style></style>
