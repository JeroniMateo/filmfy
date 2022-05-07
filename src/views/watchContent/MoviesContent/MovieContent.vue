<template>
  <div id="WatchingMovie" >
    <div class="movieInfo">
      <h1 id="Movie Title"></h1>
    </div>
    <div class="container-fluid">
      <div class="card mb-3">
        <div class="row g-0">
          <div id="MovieContentImage" class="col-md-4">
            <img
              id="MovieContentImage"
              src="../../../assets/img/LogoImageFilmfy.png"
              class="img-fluid rounded-start"
              alt="..."
            />
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <div class="MainInfo">
                <ul class="list-group list-group-flush">
                  <li class="list-group-item" id="MovieContentTitle">
                    STAR WARS: EPISODIO IV
                  </li>
                  <li class="list-group-item" id="MovieContentYear">
                    <label for="">Date:</label> 7 de noviembre de 1977
                  </li>
                  <li class="list-group-item" id="MovieContentGenre">
                    <label for="">Genero:</label> Ciencia ficción, Aventura
                  </li>
                  <li class="list-group-item" id="MovieContentDirectors">
                    <label for="">Directores:</label> George Lucas
                  </li>
                  <li class="list-group-item" id="MovieContentActors">
                    <label for="">Actores:</label> Mark Hamill, Harrison Ford,
                    Carrie Fisher
                  </li>
                  <li class="list-group-item" id="MovieContentRuntime">
                    <label for="">Duración:</label> 2h 01min
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="MovieContentSinopsis">
        <div id="SinopsisTitle">
          <h2 class="SinopsisHeader"><b>SINOPSIS</b></h2>
        </div>
        <p id="SinopsisText">
          Los gobernantes del Imperio Galáctico, la fuerza del mal que domina el
          universo, capturan a la princesa Leia, quien posee datos
          confidenciales sobre su centro de operaciones militares, denominado
          "Estrella de la Muerte". Antes de su secuestro, la Princesa transfiere
          la información ultrasecreta a la base de datos del robot R2-D2.
          Catalogado como un material inservible, R2-D2, junto con su compañ ero
          C3PO, son deportados a un planeta remoto, siendo comprados por el
          joven Luke Skywalker en el mercado negro. Debido a un hecho fortuito,
          Luke accede al mensaje de la princesa Leia, quien solicita el auxilio
          del veterano Caballero Jedi Obi-Wan Kenobi. Luke, Obi-Wan, los robots,
          el piloto Han Solo y el gigantesco wookiee Chewbacca conforman la
          tripulación que intentará liberar a la princesa Leia de los dominios
          de Darth Vader, la autoridad suprema del Imperio Galáctico.
        </p>
      </div>
      <div id="MovieContentValoration">
        <h2>Valora esta pelicula:</h2>
        <br />
        <div class="valoracion">
          <!-- Estrella 1 -->
          <button>
            <i class="fas fa-star"></i>
          </button>

          <!-- Estrella 2 -->
          <button>
            <i class="fas fa-star"></i>
          </button>

          <!-- Estrella 3 -->
          <button>
            <i class="fas fa-star"></i>
          </button>

          <!-- Estrella 4 -->
          <button>
            <i class="fas fa-star"></i>
          </button>

          <!-- Estrella 5 -->
          <button>
            <i class="fas fa-star"></i>
          </button>
        </div>
      </div>
      <!--Trailer play automaticaly-->
      <div id="Trailer"><TrailerVideo /></div>

      <div id="Opinions">
        <h2><b>Comentarios y Valoraciones</b></h2>
        <div id="MovieContentOpinion">
          <div id="MovieContentOpinionUser">
            <div id="MovieContentOpinionUserImage">
              <img src="../../../assets/img/cameraLogo.png" alt="" />
            </div>
            <br />
            <div id="MovieContentOpinionUserName">
              <h4>Mattius DT</h4>
            </div>
          </div>
          <div id="OpinionContent">
            <div id="MovieContentOpinionDate">
              <small>2022/05/07</small>
            </div>
            <div id="MovieContentOpinionHeader">
              <h2>Mi Opinion</h2>
            </div>
            <div id="OpinionText"><p>I love this movie</p></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TrailerVideo from '@/components/movies/Trailers/TrailerVideo.vue'
export default {
  name: 'MovieContent',
  components: {
    TrailerVideo
  }
}
</script>

<style>
:root {
  --color-inactivo: #5f5050;
  --color-hover: #ffa400;
}
.valoracion {
  display: flex;
  flex-direction: row-reverse;
}
.valoracion button {
  background-color: initial;
  border: 0;
  color: var(--color-inactivo);
  transition: 1s all;
}
.valoracion button:hover {
  cursor: pointer;
  color: var(--color-hover);
  transform: rotate(360deg);
}
button:nth-child(1):hover ~ button {
  color: var(--color-hover);
  transform: rotate(360deg);
}
button:nth-child(2):hover ~ button {
  color: var(--color-hover);
  transform: rotate(360deg);
}
button:nth-child(3):hover ~ button {
  color: var(--color-hover);
  transform: rotate(360deg);
}
button:nth-child(4):hover ~ button {
  color: var(--color-hover);
  transform: rotate(360deg);
}
button:nth-child(5):hover ~ button {
  color: var(--color-hover);
  transform: rotate(360deg);
}

div#MovieContentImage {
  background-color: #000;
  height: 40vh;
  width: 20vw;
}
img#MovieContentImage {
  height: 40vh;
  width: 20vw;
}
div#MovieContentSinopsis {
  background-color: #000;
  border-radius: 5%;
}
p#SinopsisText {
  padding: 2%;
}
h2.SinopsisHeader {
  color: #4e9f3d;
  font-size: 3.5vw;
  margin: 1%;
}
div#SinopsisTitle {
  background-color: #000;
  border-radius: 5%;
  display: flex;
}
div#MovieContentValoration {
  background-color: #000;
  color: #fff;
  border-radius: 5%;
  display: flex;
  width: 100%;
  height: 5vw;
  align-items: center;
  justify-content: space-evenly;
  flex-direction: row;
}
div.valoracion {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: #242424;
  margin: 1%;
  height: 6vh;
}
div#Opinions {
  padding: 1%;
  background-color: #000;
  border-radius: 3%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}
div#MovieContentOpinionUser {
  display: flex;
}
div#OpinionContent {
  background-color: #000;
  border-radius: 3%;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
}

</style>
