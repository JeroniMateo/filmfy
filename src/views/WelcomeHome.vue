<template>
  <div id="app" class="content">
    <Header />
    <div class="mastercard">
      <div class="container">
        <div class="card bg-dark text-white">
          <img src="..." class="card-img" alt="..." />
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
import WelcomeCards from "../js/components/Welcome/WelcomeCards.vue";
import Header from "../js/components/basics/Header.vue";
import FeaturedContent from "../js/components/Welcome/FeaturedContent.vue";
import Footer from "../js/components/basics/Footer.vue";
export default {
    name: "App",
  components: {
    WelcomeCards,
    Header,
    FeaturedContent,
    Footer,
  },
};
</script>

<style>

</style>