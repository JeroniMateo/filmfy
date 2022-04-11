<template>
   <div id="app" class="content">
    <Header />
    <WelcomeCards />
    <FeaturedContent />
    <Footer />
  </div>
</template>
<script>
import WelcomeCards from "../src/components/Welcome/WelcomeCards.vue";
import Header from "../src/components/basics/Header.vue";
import FeaturedContent from "../src/components/Welcome/FeaturedContent.vue";
import Footer from "../src/components/basics/Footer.vue";
export default {
  components: {
    WelcomeCards,
    Header,
    FeaturedContent,
    Footer,
  },
};
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
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
