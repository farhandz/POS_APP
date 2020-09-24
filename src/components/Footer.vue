<template>
  <footer class="fixed-bottom mt-5">
      <div class="footer-content">
        <div class="ftn" ><a href="/dashboard.html"><img src="icon/clipboard.png" alt="" /></a></div>
        <div class="ftn" ><a href="/index.html"><img src="icon/fork (1).png" alt="" /></a></div>
        <div class="ftn"
        style="cursor: pointer;"
        ype="button"
        data-toggle="modal"
        data-target="#modal2">
        <img src="icon/add.png" alt="" /></div>
        <div @click="togle" class="ftn" ><a style=" text-decoration: none;" href="#">cart <span>{{total.length}}</span> </a></div>
      </div>
    </footer>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters({
      total: 'cart/getCart'
    })
  },
  methods: {
    ...mapActions({
      togle: 'cart/togleslide'
    })
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
