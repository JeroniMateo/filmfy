<template>
  <div class="container-fluid">
    <div class="card bg-dark text-white">
      <img
        src="../../assets/img/Welcome/MainContentImageWelcome.jpg"
        height="500px"
        class="card-img"
        alt="..."
      />
      <div class="card-img-overlay">
        <h2 class="card-title"><b>FILMFY</b></h2>
        <h4 class="card-text">
         <b> Encuentra variedad de conentido <br />
          y crea listas para compartirlas con tus amigos</b>
        </h4>
        <p class="card-text">Disfruta de contenido exclusivo</p>
        <div id="buscarContenido">
          <label id="verHoy" class="d-flex"
            >Que vemos Hoy?
            <input
              class="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button class="btn btn-outline-danger" type="submit">Search</button>
          </label>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MainWelcome",
};
</script>

<style>
/**Falta difuminar el fondo */
h2 {
  color: green;
  font-size: 10vh;
}
h4 {
  color: red;
  font-size: 5vh;
}
div#buscarContenido {
  margin-top: 20px;
  background-color: greenyellow;
}
label#verHoy {
  margin-top: 20px;
  color: black;
}
</style>