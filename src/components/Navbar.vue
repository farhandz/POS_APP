<template>
  <nav>
      <ul>
      <li
        style="cursor: pointer;"
        ype="button"
        data-toggle="modal"
        data-target="#modal2"
        :class="role == 0 ? 'd-none': '' "
        ><img src="icon/add.png" alt="" v-b-modal.modal-2 /></li>
        <li><a href="/dashboard.html"><img src="icon/clipboard.png" alt="" /></a></li>
        <li><a href="index.html"><img src="icon/fork (1).png" alt="" /></a></li>
        <li><button @click="delet2e" v-my-on:mouseover="alertMe" :class=" color ? 'btn btn-dark' : 'btn btn-warning'">logout</button></li>
      </ul>
      <AddModal />
    </nav>
</template>

<script>
import { mapActions } from 'vuex'
import AddModal from './modal/Add'
export default {
  data () {
    return {
      role: localStorage.getItem('role'),
      color: false
    }
  },
  components: {
    AddModal
  },
  methods: {
    ...mapActions(['logout']),
    delet2e () {
      this.logout().then(res => {
        alert(res)
        window.location = '/'
      }).catch(err => {
        alert(err)
        window.location = '/login'
      })
    },
    alertMe () {
      this.color = !this.color
    }

  },
  directives: {
    'my-on': {
      bind (el, binding) {
        // console.log(el)
        const type = binding.arg
        const myFunction = binding.value
        console.log(myFunction)
        el.addEventListener(type, myFunction)
      }
    }
  }

}
</script>

<style>

</style>
