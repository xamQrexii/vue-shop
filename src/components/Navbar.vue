<template>
  <nav class="navbar navbar-light sticky-top mr-3 p-5">
    <div
      v-if="cart.length"
      class=" w-100 navbar-text ml-auto d-flex justify-content-end position-relative"
    >
      <div
        class="mr-auto d-flex align-items-end flex-column bd-highlight mb-3 position-absolute"
      >
        <div class="mb-2">
          <span
            class="font-weight-bold bg-white d-inline-block"
            style="margin-right: 5px;"
            ><curr :amt="cartTotal"></curr
          ></span>
          <button
            @click="toggleCartMenu"
            class="btn btn-sm btn-success ml-3"
            id="cartDropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            <fa icon="shopping-cart" />
            {{ cartQty }}
          </button>
        </div>
        <cart-dropdown
          :cart="cart"
          :display-cart="displayCart"
          @delete-item="deleteItem"
        />
      </div>
    </div>
  </nav>
</template>

<script>
import Curr from '@/components/Curr'
import CartDropdown from '@/components/CartDropdown'
import { mapState, mapMutations, mapGetters } from 'vuex'

export default {
  components: {
    Curr,
    CartDropdown
  },
  methods: {
    ...mapMutations(['toggleCartMenu', 'deleteItem'])
  },
  computed: {
    ...mapState({
      cart: state => state.cart.cart,
      displayCart: state => state.cart.displayCart
    }),
    ...mapGetters(['cartTotal', 'cartQty'])
  }
}
</script>
