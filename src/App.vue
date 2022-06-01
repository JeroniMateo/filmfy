<template>
  <Header/>
  <router-view/>
  <Footer/>
</template>
<script>
import Header from '../src/components/basics/Header.vue'
import Footer from '../src/components/basics/Footer.vue'

export default {
  name: 'App',
  components: {
    Header,
    Footer
  }
}
</script>
<style>


#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #ffff;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #0000;
}

nav a.router-link-exact-active {
  color: #ffff;
}


</style>
