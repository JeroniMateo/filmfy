<template>
  <Header />
  <router-view />
  <Footer />
</template>
<script>
import WelcomeHome from './views/Welcome.vue'
import Header from '../src/components/basics/Header.vue'
import Footer from '../src/components/basics/Footer.vue'

export default {
  name: 'App',
  components: {
    WelcomeHome,
    Header,
    Footer
  }
}
</script>
<style>
body {
  background-color: #191A19;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: #19282f;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}

</style>
