<template>
  <div id="WatchingMovie">
    <div class="movieInfo">
      <h1 id="Movie Title"></h1>
    </div>
    <div class="container-fluid">
      <div class="card mb-3">
        <div class="row g-0">
          <div id="MovieContentImage" class="col-md-4">
            <img
              id="MovieContentImage"
              src="../../../assets/img/MoviesIMG/el-padrino.jpg"
              class="img-fluid rounded-start"
              alt="..."
            />
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <div class="MainInfo">
                <ul class="list-group list-group-flush">
                  <li class="list-group-item" id="MovieContentTitle">
                    <label for="">Titulo:</label>
                  </li>
                  <li class="list-group-item" id="MovieContentYear">
                    <label for="">Fecha:</label>
                  </li>
                  <li class="list-group-item" id="MovieContentGenre">
                    <label for="">Genero:</label> 
                  </li>
                  <li class="list-group-item" id="MovieContentDirectors">
                    <label for="">Directores:</label> 
                  </li>
                  <li class="list-group-item" id="MovieContentActors">
                    <label for="">Actores:</label> 
                  </li>
                  <li class="list-group-item" id="MovieContentRuntime">
                    <label for="">Valoracíon:</label>
                  </li>
                  <li class="list-group-item" id="MovieContentRuntime">
                    <label for="">Vista <button></button></label>
                  </li>
                  <li class="list-group-item" id="MovieContentRuntime">
                    <label for="">Favoritos <button></button></label>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="MovieContentSinopsis">
        <div id="SinopsisTitle">
          <h2 class="SinopsisHeader">Sinopsis</h2>
        </div>
        <p id="SinopsisText">
     
        </p>
      </div>
      <div id="MovieContentValoration">
        <h2>Valoración:</h2>
        <button class="Rating">Valorar</button>
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
        <h2 class="OpnionTitle">Comentarios y Valoraciones</h2>
        <div id="MovieContentOpinion">
          <div id="MovieContentOpinionUser">
            <div id="MovieContentOpinionHeader">
              <button id="añadirComentario" @click="añadirComentario">
                Añadir Comentario
              </button>
            </div>
            <div id="AddComment"></div>
            <div id="CommentArea" style="display: none">
              <textarea
                name="Comentario"
                id="CommentTextArea"
                cols="90"
                rows="10"
              ></textarea>
              <button id="btnComentar" @click="comentar">Comentar</button>
            </div>
            <div id="Comments" style="display: none">
              <div id="UserComent">
                <div id="MovieContentOpinionUser">
                  <div class="OpinionUserImage">
                    <img src="../../../assets/img/cameraLogo.png" alt="" />
                  </div>
                  <div class="OpinionUserName">
                    <h4>Mattius DT</h4>
                  </div>
                </div>
                <div id="CommentText">
                  <p>{{ comentarios }}</p>
                </div>
                <div id="OpinionContent">
                  <div id="MovieContentOpinionDate">
                    <p id="DateComment">2022/05/07</p>
                  </div>
                </div>
              </div>
            </div>
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
  },
  data() {
    return {
      comentario: '',
      comentarios: []
    }
  },
  methods: {
    añadirComentario() {
      document.getElementById('CommentArea').style.display = 'block'
      document.getElementById('btnComentar').style.display = 'block'
      document.getElementById('añadirComentario').style.display = 'none'
    },
    comentar() {
      document.getElementById('Comments').style.display = 'flex'
      var comentario = document.getElementById('CommentTextArea').value
      document.getElementById(
        'CommentText'
      ).innerHTML = `<p id="Pcomentario">${comentario}</p>`
      document.getElementById('CommentArea').style.display = 'none'
      document.getElementById('btnComentar').style.display = 'none'
      document.getElementById('añadirComentario').style.display = 'flex'
      this.comentarios.push(comentario)
    }
  }
}
</script>

<style scoped>
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
  height: 45vh;
  width: 25vw;
}
img#MovieContentImage {
  height: 74vh;
  width: 25vw;
}
div#MovieContentSinopsis {
  background-color: #000;
  border-radius: 5%;
}
p#SinopsisText {
  padding: 2%;
  font-size: 1.2rem;
}
h2.SinopsisHeader {
  color: #4e9f3d;
  font-size: 3.5vw;
  margin: 1%;
}
h2 {
  color: #4e9f3d;
  font-size: 3vw;
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
  background-color: #fff;
  border-radius: 3%;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
}
#WatchingMovie {
  margin: auto;
  width: 70%;
}
label {
  font-size: 2vw;
}
li {
  font-size: 1.5vw;
}
button#añadirComentario {
  font-size: 2vh;
}
button#btnComentar {
  font-size: 2vh;
  margin-top: -6vh;
  font-size: 2vh;
  margin-left: 79vh;
  z-index: 1;
  padding: 1%;
  color: #000;
}
p#DateComment {
  font-size: 1.2vw;
  color: #000;
  background-color: #fff;
}

p#Pcomentario {
  color: #000;
  background-color: #fff;
  border-radius: 10%;
}
div#UserComent {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-content: flex-start;
  justify-content: center;
  background-color: #fff;
  color: #000;
  width: 74vh;
}
</style>
