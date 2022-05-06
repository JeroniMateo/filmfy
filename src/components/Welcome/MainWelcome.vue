<template>
  <div id="Welcome" class="container-fluid p-3 card bg-dark text-white">
    <div id="MainWelcome" class="card-img-overlay">
      <div class="FilmfyIs">
        <h4 class="card-text">
          <b>
            Encuentra conentido ideal <br />
            crea tus mejores listas de cine <br />
            y compartirlas con tus amigos</b
          >
        </h4>
      </div>
      <br />
      <div class="container">
        <div id="buscarContenido">
          <label id="verHoy" class="d-flex"></label>
          <select
            name="moviesSearchFilter"
            id="moviesSearchFilter"
            form="moviesSearchform"
          >
            <option value="volvo">Titulo</option>
            <option value="saab">Genero</option>
            <option value="opel">Actor</option>
            <option value="opel">Director</option>
          </select>
          <input
            class="form-control me-6"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button class="btn btn-outline-success" type="submit">Search</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MainWelcome'
}
</script>

<style scoped>
#Welcome {
  background-image: url('../../assets/img/Welcome/MainContentImageWelcome.jpg');
  padding: 400px 100px;
  text-align: center;
  background-position: center center;
  background-size: cover;
  background-repeat: no-repeat;
  position: relative;
  width: 99%;
  height: 50vh;
}
#Welcome:before {
  content: '';
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.6);
}
#Welcome h1 {
  font-size: 60px;
  color: #fff;
  position: relative;
}
#MainContentImageWelcome {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
#buscarContenido {
  display: flex;
}
h2 {
  color: rgb(78, 159, 61);
  font-size: 10vh;
}
h4 {
  color: #fff;
  font-size: 3.5vw;
  float: left;
}
div#buscarContenido {
  margin-top: 20px;
  background-color: #2c3e50;
}
label#verHoy {
  margin-top: 20px;
  color: black;
}
button {
  background-color: #e59934;
}
div#MainWelcome {
  display: flex;
  flex-direction: column-reverse;
  align-content: center;
  align-items: center;
  justify-content: space-evenly;
  flex-wrap: nowrap;
}
div.FilmfyIs{
  display: flex;
}
</style>
