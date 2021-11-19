<template>
  <navbar />
  <div class="container">
    <router-view />
  </div>
</template>

<script>
import Navbar from '@/components/Navbar'

export default {
  components: {
    Navbar
  },
  watch: {
    $route(to, from) {
      this.$store.commit('toggleCartMenu')
    }
  }
}
</script>

<style lang="scss">
$primary: #6f42c1;
@import 'node_modules/bootstrap/scss/bootstrap';
</style>
