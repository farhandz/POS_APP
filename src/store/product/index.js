import axios from 'axios'
// import router from '../../router'

const state = () => {
  return {
    all: {
      name: 'farhan',
      produkData: [],
      searchdata: null,
      sercah: '',
      page: 0,
      getprodukitem: ''
    }
  }
}
const getters = {
  getProduk (state) {
    return state.all
  }
}
const mutations = {
  getDataProduk (state, payload) {
    state.all.produkData = payload
  },
  search_produk (state, payload) {
    state.all.searchdata = payload
  },
  page_produk (state, payload) {
    // alert(payload)
    const parse = parseInt(payload)
    if (payload > 1) {
      state.all.page = parse
    } else {
      state.all.page = 1
    }
    // state.all.page += payload
  },
  get_serch (state, data) {
    this.state.sercah = data
  },
  get_produk_id (state, item) {
    state.all.getprodukitem = item
  }
}

const actions = {
  getAl ({ commit, state }) {
    return new Promise((resolve, reject) => {
      axios.get('http://localhost:3000/api/produk/').then(ress => {
        console.log(ress.data.data)
        commit('getDataProduk', ress.data.data)
      })
    })
  },
  deleteProduk ({ commit }, id) {
    return new Promise((resolve, reject) => {
      axios.delete(`http://localhost:3000/api/produk/${id}`).then(dt => {
        resolve('data berhasil di hapus')
      })
    })
  },
  addproduk ({ commit }, produk) {
    return new Promise((resolve, reject) => {
      axios.post('http://localhost:3000/api/produk', produk).then(ress => {
        resolve(ress.data)
      })
    })
  },
  seacrhProduk ({ commit, state }, search) {
    // alert(search)
    // console.log(state.all.page)
    return new Promise((resolve, reject) => {
      axios.get(`http://localhost:3000/api/produk?search=${search}&page=${state.all.page}`).then(ress => {
        commit('getDataProduk', ress.data.data)
        commit('search_produk', search)
      })
    })
  },
  sortProduk ({ commit }, sort) {
    // alert(sort)
    return new Promise((resolve, reject) => {
      axios.get(`http://localhost:3000/api/produk?sort=${sort}&by=desc`).then(ress => {
        commit('getDataProduk', ress.data.data)
        commit('search_produk', ress.data.data)
      })
    })
  },
  pagination ({ commit, state }, e) {
    // if (state.all.searchdata.length) {
    //   alert()
    // }
    const serch = Array.isArray(state.all.searchdata) ? '' : state.all.searchdata
    // alert()
    // alert(typeof serch === 'string')
    console.log(serch)
    // console.log(serch)
    return new Promise((resolve, reject) => {
      axios.get(`http://localhost:3000/api/produk?page=${e}&search=${serch}`).then(ress => {
        commit('getDataProduk', ress.data.data)
        commit('page_produk', e)
      })
    })
  },
  getSerch ({ commit }, data) {
    commit('get_serch', data)
  },
  editProduk ({ state }, payload) {
    return new Promise((resolve, reject) => {
      axios.put(`http://localhost:3000/api/produk/${state.all.getprodukitem.id}`, payload).then(ress => {
        console.log(ress)
      })
    })
  },
  getProdukid ({ commit }, item) {
    commit('get_produk_id', item)
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
