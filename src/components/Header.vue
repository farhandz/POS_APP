<template>
  <header>
      <div class="content-head">
        <div @click="togle" class="ctn-search mt-2" style="cursor: pointer;">
          <img src="icon/menu (1).svg" alt="" />
        </div>
        <div class="ctn">food item </div>
        <div class="input-group col-md-4">
        <b-form-input v-model="search" @keyup="onserch" placeholder="Search"></b-form-input>
     <select @change="selectCategory"  class="form-control ml-2" id="exampleFormControlSelect1">
       <option value="title" selected  >makanan</option>
       <option value="harga">harga</option>
       <option value="categoru">category</option>
    </select>
      <select class="form-control ml-2 ">
        <option>A-Z</option>
        <option>Z-A</option>
      </select>
      </div>
        <div class="ctn">
          cart  <span>{{total.length}}</span>
        </div>
      </div>
    </header>
</template>

<script>
import { mapActions, mapGetters, mapState } from 'vuex'
import router from '../router/index'
export default {
  data () {
    return {
      search: '',
      sort: '',
      query: ''
    }
  },
  computed: {
    ...mapGetters({
      total: 'cart/getCart',
      produkSearch: 'produk/getProduk'
    }),
    ...mapState({
      produkSearc: 'produk'
    })
  },
  methods: {
    selectCategory: function (e) {
      this.sortdata(e.target.value)
    },
    ...mapActions({
      togle: 'cart/togleslide',
      cari: 'produk/seacrhProduk',
      sortdata: 'produk/sortProduk',
      getserch: 'produk/getSerch'
    }),
    onserch () {
      router.push({ name: 'a', query: { search: this.search } })
      this.cari(this.$route.query.search)
      this.getserch(this.search)
    }
  },
  mounted () {
    // this.$route.push({ path: '/home', query: { plan: 'asas' } })
    // router.push({ path: '/home/asa', query: { plan: 'asas' } })
  }
}
</script>

<style scoped>
span{
 background: blue;
   border-radius: 0.8em;
  -moz-border-radius: 0.8em;
  -webkit-border-radius: 0.8em;
  color: #ffffff;
  display: inline-block;
  font-weight: bold;
  line-height: 1em;
  margin-right: 15px;
  text-align: center;
  width: 1em;
}

</style>
