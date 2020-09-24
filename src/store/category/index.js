import axios from 'axios'
const state = () => {
  return {
    name: 'farhan',
    category: []
  }
}
const getters = {
  categoryState (state) {
    return state.category
  }
}
const mutations = {
  get_category (state, item) {
    state.category = item.data.data
  }
}
const actions = {
  getCategory ({ commit }) {
    return new Promise((resolve, reject) => {
      axios.get('http://localhost:3000/api/category').then(response => {
        commit('get_category', response)
      })
    })
  }
}
export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
