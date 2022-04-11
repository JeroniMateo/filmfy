<template>
<div class="container-fluid">
     <div id="app" class="content">
    <Header />
    <MainWelcome/>
    <WelcomeCards />
    <FeaturedContent />
    <Footer />
  </div>
</div>
</template>
<script>
import Header from "../src/components/basics/Header.vue";
import MainWelcome from "../src/components/Welcome/MainWelcome.vue";
import WelcomeCards from "../src/components/Welcome/WelcomeCards.vue";
import FeaturedContent from "../src/components/Welcome/FeaturedContent.vue";
import Footer from "../src/components/basics/Footer.vue";
export default {
  name: "App",
  components: {
    Header,
    MainWelcome,
    WelcomeCards,
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
