<template>
   <div id="app" class="content">
    <Header />
    <div class="mastercard">
      <div class="container">
        <div class="card bg-dark text-white">
          <img  class="card-img" alt="..." />
          <div class="card-img-overlay">
            <h5 class="card-title">Filmfy</h5>
            <p class="card-text">
              Encuentra variedad de conentido <br />
              y crea listas para compartirlas con tus amigos
            </p>
            <small class="card-text">Disfruta de contenido exclusivo</small>
          </div>
        </div>
      </div>
    </div>
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
