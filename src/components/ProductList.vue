<template>
  <transition-group name="products" appear>
    <div
      v-for="item in filteredProducts"
      :key="item.id"
      id="item-list"
      class="row align-items-center"
    >
      <product :item="item" @addItem="addItem" />
    </div>
  </transition-group>
</template>

<script>
import Product from '@/components/Product'
import { mapGetters, mapMutations } from 'vuex'

export default {
  name: 'ProductList',
  methods: {
    ...mapMutations(['addItem'])
  },
  computed: {
    ...mapGetters(['filteredProducts'])
  },
  components: {
    Product
  }
}
</script>

<style>
.products-enter-active,
.products-leave-active {
  transition: all 0.5s ease-in-out;
}
.products-enter-from {
  opacity: 0;
  transform: translateX(300px);
}
.products-leave-to {
  opacity: 0;
  transform: translateX(-300px);
}
</style>
