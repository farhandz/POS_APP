import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import produk from './product'
import cart from './cart/index'
import category from './category'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    produk,
    cart,
    category
  },
  state: {
    token: localStorage.getItem('token'),
    role: ''
  },
  getters: {
    islogin (state) {
      if (state.token !== null) {
        return true
      } else {
        return false
      }
    }
  },
  mutations: {
    set_role (state, role) {
      state.role = role
    }
  },
  actions: {
    login ({ commit }, payload) {
      return new Promise((resolve, reject) => {
        axios
          .post('http://localhost:3000/api/user/login', payload)
          .then(ress => {
            if (!ress.data.tokenLogin) {
              alert('email atau password salah')
            } else {
              resolve(ress.data.message)
              localStorage.setItem('token', ress.data.tokenLogin)
              localStorage.setItem('refreshToken', ress.data.refreshtoken)
              localStorage.setItem('role', ress.data.role)
            }
          }).catch(err => {
            reject(err)
          })
      })
    },
    logout ({ commit }, payload) {
      return new Promise((resolve, reject) => {
        localStorage.removeItem('token')
        resolve('logout berhasil')
      })
    },
    register ({ commit }, payload) {
      return new Promise((resolve, reject) => {
        axios.post('http://localhost:3000/api/user/register', payload).then(ress => {
          // console.log(ress)
          resolve(ress.data)
        }).catch(err => {
          reject(err)
        })
      })
    }
  }
})
