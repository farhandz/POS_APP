const nomemixins = {
  data () {
    return {
      title: ''
    }
  },
  created () {
    this.title = this.formatPrice
  },
  methods: {
    formatPrice (value) {
    //   const val = (value / 1).toFixed(2).replace('.', ',')
      // eslint-disable-next-line no-useless-escape
      return 'IDR ' + value.toString().replace(/(\d)(?=(\d{3})+(?:\.\d+)?$)/g, '$1\.')
    }
  }
}

export default nomemixins
