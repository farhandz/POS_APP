<template>
  <main class="mb-5">
    <div class="container mt-1" aria-label="Page navigation example">
      <ul class="pagination">
        <li  class="page-item">
          <a class="page-link" href="#" aria-label="Previous">
            <span aria-hidden="true">&laquo;</span>
            <span class="sr-only">Previous</span>
          </a>
        </li>
        <li  class="page-item"><option class="page-link" @click="pluspage" value="1">{{this.format(1000)}}</option></li>
        <li class="page-item"><option class="page-link" @click="pluspage" value="2">2</option></li>
        <li class="page-item"><option class="page-link" @click="pluspage" value="3">3</option></li>
        <li class="page-item">
          <a class="page-link" href="#" aria-label="Next">
            <span aria-hidden="true">&raquo;</span>
            <span class="sr-only">Next</span>
          </a>
        </li>
      </ul>
    </div>
      <div class="image">
        <div  v-for="(item,index) in asu.produkData"  :key="index" class="tayo">
          <div class="menu-image">
            <img :src="`http://localhost:3000/${item.image}`" alt="" />
            <p>{{item.title}}</p>
            <h1>{{format(item.harga)}}</h1>
            <button @click="data(item)" class="btn btn-primary"> <b-icon icon="cart" ></b-icon></button>
            <button :class="role == 0 ? 'd-none': '' " @click="getprodukid(item)" v-b-modal.modal-1 class="btn btn-primary ml-2"> <b-icon icon="pencil" ></b-icon></button>
            <button :class="role == 0 ? 'd-none': '' " @click="onDelete(item.id)" class="btn btn-primary ml-2"> <b-icon icon="trash-fill" ></b-icon></button>
          </div>
        </div>
      </div>
      <Checkoutmodal />
    </main>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import Checkoutmodal from './modal/Checkout'
import nomemixins from '../mixin/index'
export default {
  components: {
    Checkoutmodal
  },
  mixins: [nomemixins],
  data () {
    return {
      role: localStorage.getItem('role')
    }
  },
  created () {
    this.formatPrice()
  },
  computed: {
    ...mapGetters({
      asu: 'produk/getProduk'
    })
  },
  methods: {
    ...mapActions({
      klik: 'produk/getAl',
      serch: 'produk/seacrhProduk',
      sortProduk: 'produk/sortProduk',
      deleteProd: 'produk/deleteProduk',
      data: 'cart/addToCart',
      page: 'produk/pagination',
      getprodukid: 'produk/getProdukid'
    }),
    format (e) {
      // eslint-disable-next-line no-useless-escape
      return 'IDR ' + e.toString().replace(/(\d)(?=(\d{3})+(?:\.\d+)?$)/g, '$1\.')
    },
    onDelete (id) {
      this.deleteProd(id).then(res => {
        alert(res)
        window.location = '/'
      })
    },
    pluspage (e) {
      this.page(e.target.value, 'as')
    }
  },
  mounted () {
    this.klik()
    this.sortProduk()
  },
  watch: {
    asu () {
      this.serch()
    }
  },
  directives: {
    'my-on': {
      bind (el, binding) {
        // console.log(el)
        const type = binding.arg
        console.log(type)
        const myFunction = binding.value
        el.addEventListener(type, myFunction)
      }
    }
  }
}
</script>

<style>

</style>
