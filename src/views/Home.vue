<template>
  <div class="container-wrapper">
    <Header />
    <Navbar />
    <Content />
    <Aside />
    <Footer />
  </div>
</template>

<script>
// @ is an alias to /src
import Header from '../components/Header'
import Navbar from '../components/Navbar'
import Content from '../components/Content'
import Aside from '../components/Aside'
import Footer from '../components/Footer'

export default {
  name: 'Home',
  components: {
    Header,
    Navbar,
    Content,
    Aside,
    Footer
  }
}
</script>
