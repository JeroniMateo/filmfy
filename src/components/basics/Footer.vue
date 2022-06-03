<template>
  <footer>
    <div
      class="d-flex flex-column align-items-center flex-nowrap container-fluid p-3"
    >
      <hr style="color: white" />
      <div class="">
        <img src="../../assets/img/cameraLogo.png" alt="logo" />
        <span class="brand-size">Filfmy</span>
      </div>
      <div class="social">
        <i class="fa-brands fa-facebook-square fa-2x"></i>
        <i class="fa-brands fa-twitter fa-2x"></i>
        <i class="fa-brands fa-instagram fa-2x"></i>
        <i class="fa-brands fa-youtube fa-2x"></i>
      </div>
      <div class="copyright">
        <small>Encuentra variedad de contenido y crea listas para compartirlas con tus amigos</small>
        <pre> © 2022 Copyright: Filmfy</pre>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer'
}
</script>

<style scoped>
footer > div {
  background-color: #000;
  color: #ecdbba;
}
.brand-size {
  font-size: 125%;
}
.social {
  display: grid;
  grid-auto-flow: column;
  grid-column-gap: 1rem;
  padding: 1rem;
}
pre {
  color: #e59934;
  padding: 1rem;
}
img {
  width: 30px;
  margin: 1%;
}
</style>
