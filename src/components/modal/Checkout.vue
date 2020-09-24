<template>
<div>
    <b-modal  :hide-footer="true" id="modal-3">
       <div class="modal-header">
            <div class="mdl1">
              <p class="font-weight-bold">Checkout</p>
              <p>Cashier : Pevita Pearce</p>
            </div>
            <div class="mdl2">
              <p class="font-weight-bold">Receipt no: #010410919</p>
            </div>
          </div>
          <div class="modal-body">
             <div v-for="(item,index) in  asu.product " :key="index"  class="mdl-body">
              <div class="list-item">{{ item.title }} {{item.qty}}x</div>
              <div class="price">{{(item.harga * item.qty).toLocaleString()}}</div>
            </div>
            <div class="mdl-body">
              <div></div>
              <div class="price">total: {{totalPrice.toLocaleString()}}</div>
            </div>
            <div class="font-weight-bold">Payment Cash</div>
            <div class="mdl-button">
              <button class="print">Print</button>
              <span class="font-weight-bold">or</span>
              <button class="print">Send Email</button>
            </div>
          </div>
  </b-modal>
</div>
</template>
<script>
import { mapState, mapGetters } from 'vuex'
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
  }

}
</script>

<style>

</style>
