<template>
  <section class="container">
    <range-selector :products="filteredProducts" v-model="max" />
    <product-list></product-list>
  </section>
</template>

<script>
import ProductList from '@/components/ProductList'
import RangeSelector from '@/components/RangeSelector'

import { mapState, mapActions, mapGetters } from 'vuex'

export default {
  name: 'Home',

  components: {
    RangeSelector,
    ProductList
  },
  created() {
    this.getProducts()
  },
  methods: {
    ...mapActions(['getProducts'])
  },
  computed: {
    ...mapState({
      products: state => state.products.products
    }),
    max: {
      get() {
        return this.$store.state.products.max
      },
      set(value) {
        this.$store.commit('setMax', Number(value))
      }
    },
    ...mapGetters(['filteredProducts'])
  }
}
</script>
