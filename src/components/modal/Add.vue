<template>
<ValidationObserver  v-slot="{ handleSubmit }" >
  <div>
    <b-modal :hide-footer="true" id="modal-2" title="BootstrapVue">
       <form @submit.prevent="handleSubmit(onadd)" enctype="multipart/form-data" >
              <div class="form-group row">
                <label  for="inputPassword" class="col-sm-2 col-form-label"
                  >nama</label
                >
                <div class="col-sm-10">
                <ValidationProvider
                name="name"
                rules="required"
                v-slot="{ errors }"
                >
                  <input
                    type="text"
                    class="form-control"
                    id="inputPassword"
                    placeholder="name"
                    v-model="form.name"
                  />
                <div class="text-danger">
                    {{errors[0]}}
                </div>
                </ValidationProvider>
                </div>
              </div>
              <div class="form-group row">
                <label  for="inputPassword" class="col-sm-2 col-form-label"
                  >image</label
                >
                <div class="col-sm-10">
                <ValidationProvider
                name="image"
                rules="image|size:10000"
                v-slot="{ errors }"
                data-vv-as="image"
                >
                  <input
                    type="file"
                    name="image_field"
                    class="form-control"
                    placeholder="image"
                    @change="uploadfile"
                  />
                  <div class="text-danger">
                    {{errors[0]}}
                </div>
                </ValidationProvider>
                </div>
              </div>
              <div class="form-group row">
                <label  for="inputPassword"  class="col-sm-2 col-form-label"
                  >price</label
                >
                <div class="col-sm-10">
                  <ValidationProvider
                name="price"
                rules="required|integer"
                v-slot="{ errors }"
                data-vv-as="image"
                  >
                  <input
                    type="text"
                    class="form-control"
                    id="inputPassword"
                    placeholder="price"
                    v-model="form.price"
                  />
                <div class="text-danger">
                    {{errors[0]}}
                </div>
                  </ValidationProvider>
                </div>
              </div>
          <div class="form-group">
            <label for="exampleFormControlSelect1">select category</label>
            <select @change="selectCategory" class="form-control" id="exampleFormControlSelect1">
              <option v-for="(item, index) in ctg" :key="index" :value="item.id"> {{item.nama_kategori}} </option>
            </select>
          </div>
              <button type="submit" class="btn btn-primary">add</button>
            </form>
    </b-modal>
    <b-modal :hide-footer="true" id="modal-1" title="BootstrapVue">
       <form @submit.prevent="onedit" enctype="multipart/form-data" >
              <div class="form-group row">
                <label  for="inputPassword" class="col-sm-2 col-form-label"
                  >{{edit.title}}</label
                >
                <div class="col-sm-10">
                <ValidationProvider
                name="name"
                rules="required"
                v-slot="{ errors }"
                >
                  <input
                    type="text"
                    class="form-control"
                    id="inputPassword"
                    v-model="ctp.getprodukitem.title"

                  />
                <div class="text-danger">
                    {{errors[0]}}
                </div>
                </ValidationProvider>
                </div>
              </div>
              <div class="form-group row">
                <label  for="inputPassword" class="col-sm-2 col-form-label"
                  >image</label
                >
                <div class="col-sm-10">
                <ValidationProvider
                name="image"
                rules="image|size:10000"
                v-slot="{ errors }"
                data-vv-as="image"
                >
                  <input
                    type="file"
                    name="image_field"
                    class="form-control"
                    placeholder="image"
                    @change="uploadfile"
                  />
                  <div class="text-danger">
                    {{errors[0]}}
                </div>
                </ValidationProvider>
                </div>
              </div>
              <div class="form-group row">
                <label  for="inputPassword"  class="col-sm-2 col-form-label"
                  >price</label
                >
                <div class="col-sm-10">
                 <ValidationProvider
                name="name"
                rules="required"
                v-slot="{ errors }"
                >
                <div  class="">
                  <input
                    type="text"
                    class="form-control"
                    id="inputPassword"
                    :placeholder="ctp.getprodukitem.harga"
                    v-model="ctp.getprodukitem.harga"

                  />
                </div>
                <div class="text-danger">
                    {{errors[0]}}
                </div>
                </ValidationProvider>
                </div>
              </div>
          <div class="form-group">
            <label for="exampleFormControlSelect1">select category</label>
            <select @change="selectCategory" class="form-control" id="exampleFormControlSelect1">
              <option v-for="(item, index) in ctg" :key="index" :value="item.id"> {{item.nama_kategori}} </option>
            </select>
          </div>
              <button type="submit" class="btn btn-primary">add</button>
            </form>
    </b-modal>
</div>
</ValidationObserver >
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  data () {
    return {
      form: {
        name: '',
        price: '',
        files: '',
        category: ''

      },
      edit: {
        title: ''
      }
    }
  },
  computed: {
    ...mapGetters({
      ctg: 'category/categoryState',
      ctp: 'produk/getProduk'
    })

  },
  methods: {
    ...mapActions({
      add: 'produk/addproduk',
      getCategory: 'category/getCategory',
      editProdukid: 'produk/editProduk'
    }),
    selectCategory: function (e) {
      this.form.category = e.target.value
    },
    uploadfile: function (e) {
      this.form.files = e.target.files[0]
    },
    onadd () {
      console.log(this.form.files)
      const formData = new FormData()
      formData.append('image', this.form.files, this.form.files.name)
      formData.append('title', this.form.name)
      formData.append('harga', this.form.price)
      formData.append('id_category', this.form.category)
      console.log(formData)
      this.add(formData).then(response => {
        console.log(response)
      })
    },
    onedit () {
      // console.log(this.edit.price)
      const idCategory = !this.form.category ? 13 : this.form.category
      const formData = new FormData()
      formData.append('image', this.form.files)
      formData.append('title', this.ctp.getprodukitem.title)
      formData.append('harga', this.ctp.getprodukitem.harga)
      formData.append('id_category', idCategory)
      // console.log(formData)
      this.editProdukid(formData)
    }
  },
  mounted () {
    this.getCategory()
  }

}
</script>

<style>

</style>
