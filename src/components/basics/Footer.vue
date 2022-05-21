<template>
  <footer>
    <div id="footer" class="container-fluid p-2">
      <div class="">
        <img src="../../assets/img/cameraLogo.png" alt="logo" />
        <small>Filfmy.es</small>
      </div>
      <div class="socials">
        <font-awesome-icon icon="fa-brands fa-facebook" />
        <font-awesome-icon icon="fa-brands fa-twitter" />
        <font-awesome-icon icon="fa-brands fa-instagram" />
        <font-awesome-icon icon="fa-brands fa-youtube" />
      </div>
      <div class="copyright">
        <pre> © 2022 Copyright: Filmfy.es</pre>
        <small>
          Encuentra variedad de conentido y crea listas para compartirlas con
          tus amigos
        </small>
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
div#footer {
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-wrap: nowrap;
  background-color: #000;
  color: #ecdbba;
  justify-content: space-around;
}
pre {
  color: #e59934;
}
img {
  width: 30px;
  margin: 1%;
}
</style>
