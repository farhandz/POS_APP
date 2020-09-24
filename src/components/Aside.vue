<template>
 <aside :class="{side: true, 'slider': asu.isActive}">
    <div @click="triger" v-if="total.length === 0" class="content-aside mx-auto">
            <img st src="image/if cart empty.png" alt="">
      </div>
      <div v-else>
        <div class="aside-nav">
        <div v-for="(item,index) in asu.product" :key="index" class="tayo-nav">
          <div class="ty-1"><img style="width: 100px" :src="`http://localhost:3000/${item.image}`" alt="" /></div>
          <div style="width: 90px" class="ty-2">
            <h1 style="font-size: 13px">{{item.title}}</h1>
            <div class="jml">
              <div><button @click="min(item.id)" >-</button></div>
              <div><span >{{item.qty}}</span></div>
              <div><button @click="plus(item.id)">+</button></div>
            </div>
          </div>
          <div class="ty-3">Rp. {{(item.harga * item.qty).toLocaleString()}}</div>
        </div>
      </div>
      <div class="aside-nav2">
        <div class="total">
          <div class="ttl-hrg">
            <h1>total</h1>
            <span>*belum termasuk pajak</span>
          </div>
          <div class="ttl-jml"><h1>Rp. {{ totalPrice.toLocaleString() }}</h1></div>
        </div>
        <div class="checkout">
          <button  v-b-modal.modal-3 data-toggle="modal" data-target="#exampleModal">
            checkout
          </button>
          <button class="ctn-search" id="cnc">Cancel</button>
        </div>
      </div>
      </div>
    </aside>
</template>

<script>
import { mapActions, mapGetters, mapState } from 'vuex'
// import { mapState } from 'vuex'
export default {
  computed: {
    ...mapState({
      asu: 'cart'
    }),
    ...mapGetters({
      total: 'cart/getCart'
    }),
    totalPrice () {
      return this.total.reduce((a, b) => a + b.qty * b.harga, 0)
    }
  },
  methods: {
    ...mapActions({
      plus: 'cart/plusqty',
      min: 'cart/minqty',
      triger: 'cart/togleslide'
    })
  }

}
</script>

<style>

</style>
