export const cart = {
  state: { cart: [], displayCart: false },
  mutations: {
    addItem: (state, product) => {
      let whichProduct

      const existing = state.cart.filter((item, index) => {
        if (item.product.id === product.id) {
          whichProduct = index
          return true
        } else {
          return false
        }
      })

      if (existing.length) {
        state.cart[whichProduct].qty++
      } else {
        state.cart.push({ product: product, qty: 1 })
      }
    },
    deleteItem: (state, idx) => {
      if (state.cart.length > 1) {
        state.cart[idx].qty--
      } else {
        state.cart.slice(idx, 1)
      }
    },
    toggleCartMenu: state => {
      state.displayCart = !state.displayCart
    }
  },
  getters: {
    cartTotal: state =>
      state.cart.reduce(
        (current, item) => (current += item.qty * Number(item.product.price)),
        0
      ),
    cartQty: state =>
      state.cart.reduce((current, item) => current + item.qty, 0)
  }
}
