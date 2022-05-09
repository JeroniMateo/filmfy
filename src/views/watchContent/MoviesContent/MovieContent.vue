<template>
  <div id="WatchingMovie" class="container">
    <div class="movieInfo">
      <h1 id="Movie Title"></h1>
    </div>
    <div class="container">
      <div class="card mb-3" style="max-width: 540px">
        <div class="row g-0">
          <div class="col-md-4 movieImage">
            <img class="img-fluid rounded-start" alt="..." />
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <div class="MainInfo">
                <ul class="list-group list-group-flush">
                  <li class="list-group-item" id="MovieContentTitle">
                    STAR WARS: EPISODIO IV
                  </li>
                  <li class="list-group-item" id="MovieContentYear">
                    Date:7 de noviembre de 1977
                  </li>
                  <li class="list-group-item" id="MovieContentGenre">
                    Genero:Ciencia ficción, Aventura
                  </li>
                  <li class="list-group-item" id="MovieContentDirectors">
                    Directores: George Lucas
                  </li>
                  <li class="list-group-item" id="MovieContentActors">
                    Actores: Mark Hamill, Harrison Ford, Carrie Fisher
                  </li>
                  <li class="list-group-item" id="MovieContentRuntime">
                    Duración:2h 01min
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="MovieContentSinopsis">
        Los gobernantes del Imperio Galáctico, la fuerza del mal que domina el
        universo, capturan a la princesa Leia, quien posee datos confidenciales
        sobre su centro de operaciones militares, denominado "Estrella de la
        Muerte". Antes de su secuestro, la Princesa transfiere la información
        ultrasecreta a la base de datos del robot R2-D2. Catalogado como un
        material inservible, R2-D2, junto con su compañero C3PO, son deportados
        a un planeta remoto, siendo comprados por el joven Luke Skywalker en el
        mercado negro. Debido a un hecho fortuito, Luke accede al mensaje de la
        princesa Leia, quien solicita el auxilio del veterano Caballero Jedi
        Obi-Wan Kenobi. Luke, Obi-Wan, los robots, el piloto Han Solo y el
        gigantesco wookiee Chewbacca conforman la tripulación que intentará
        liberar a la princesa Leia de los dominios de Darth Vader, la autoridad
        suprema del Imperio Galáctico.
      </div>
      <div class="MovieContentValoration">
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
        <div id="MovieContentOpinion">
          <div id="MovieContentOpinionHeader">
            <h3>My Opinion</h3>
          </div>
          <div id="MovieContentOpinionUser">
            <div id="MovieContentOpinionUserImage">
              <img src="../../../assets/img/cameraLogo.png" alt="" />
            </div>
            <div id="MovieContentOpinionUserName">
              <h4>Mattius DT</h4>
            </div>
          </div>
          <div id="MovieContentOpinionDate">
            <h4>2022/05/07</h4>
          </div>
          <div id="OpinionText">
            <p>I love this movie</p>
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
#WatchingMovie {
  margin: auto;
  width: 70%;
}
</style>
