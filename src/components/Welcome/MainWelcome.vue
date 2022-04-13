<template>
  <div class="container-fluid p-3">
    <div class="card bg-dark text-white">
      <img
        id="MainContentImageWelcome"
        src="../../assets/img/Welcome/MainContentImageWelcome.jpg"
        height="500px"
        class="card-img"
        alt="..."
      />
      <div class="card-img-overlay">
        <h2 class="card-title"><b>FILMFY</b></h2>
        <h4 class="card-text">
          <b>
            Encuentra variedad de conentido <br />
            y crea listas para compartirlas con tus amigos</b
          >
        </h4>
        <br />
        <div class="container">
          <div id="buscarContenido">
            <label id="verHoy" class="d-flex"
              >
              <select name="cars" id="cars" form="carform">
                <option value="volvo">Peliculas</option>
                <option value="saab">Series</option>
                <option value="opel">Documentales</option>
              </select>
              <input
                class="form-control me-6"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button class="btn btn-outline-danger" type="submit">
                Search
              </button>
            </label>
          </div>
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
img#MainContentImageWelcome {
  filter: blur(3px);
}
</style>