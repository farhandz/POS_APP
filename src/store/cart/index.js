
const state = () => {
  return {
    product: [],
    data: [],
    farhan: 'asasasas',
    isActive: false
  }
}
const getters = {
  getCart (state) {
    return state.product
  }
}

const mutations = {
  Checkout (state, item) {
    const isProduct = state.product.find(pd => pd.id === item.id)
    if (!isProduct) {
      state.product.push({
        ...item,
        qty: 1
      })
    } else {
      isProduct.qty++
    }
  },
  plus_qty (state, id) {
    const plusCart = state.product.find(pd => pd.id === id)
    plusCart.qty++
  },
  min_qty (state, id) {
    const minCart = state.product.find(pd => pd.id === id)
    if (minCart.qty > 1) {
      minCart.qty--
    } else {
      const index = state.product.indexOf(minCart)
      state.product.splice(index, 1)
    }
  },
  slide_btn (state) {
    state.isActive = !state.isActive
  }
}
const actions = {
  addToCart ({ commit }, item) {
    commit('Checkout', item)
  },
  plusqty ({ commit }, id) {
    commit('plus_qty', id)
  },
  minqty ({ commit }, id) {
    commit('min_qty', id)
  },
  togleslide ({ commit }) {
    commit('slide_btn')
  }
}

export default {
  namespaced: true,
  state,
  actions,
  mutations,
  getters
}
