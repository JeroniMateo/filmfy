<template>
  <div id="WatchingMovie">
    <h1 id="Movie Title"></h1>
    <div class="container-fluid">
      <div id="movie">
        <div class="card mb-3">
          <div class="row g-0" id="MovieCardInfo">
            <div id="MovieContentImage" class="col-md-4">
              <img
                id="img_movie"
                src="../../assets/img/MoviesIMG/el-padrino.jpg"
                class="img-fluid rounded-start"
                alt="..."
              />
            </div>
            <div class="col-md-8">
              <div class="MainInfo card-body">
                <ul class="list-group list-group-flush">
                  <li class="list-group-item" id="MovieContentTitle">
                    <label for="">Titulo:</label>
                    <p id="title_movie">{{ title_movie }}</p>
                  </li>
                  <li class="list-group-item" id="MovieContentYear">
                    <label for="">Fecha:</label>
                    <p id="date_movie">{{ date_movie }}</p>
                  </li>
                  <li class="list-group-item" id="MovieContentGenre">
                    <label for="">Genero:</label>
                    <p id="category_movie">{{ category_movie }}</p>
                  </li>
                  <li class="list-group-item" id="MovieContentDirectors">
                    <label for="">Directores:</label>
                    <p id="directors_movie">{{ directors_movie }}</p>
                  </li>
                  <li class="list-group-item" id="MovieContentActors">
                    <label for="">Actores:</label>
                    <p id="actors_movie">{{ actors_movie }}</p>
                  </li>
                  <li class="list-group-item" id="MovieContentRuntime">
                    <label for="">Valoracíon:</label>
                    <p id="rating_movie">{{ rating_movie }}</p>
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
        <div id="MovieContentSinopsis">
          <div id="SinopsisTitle">
            <h2 class="SinopsisHeader" id="sinopsis_movie">Sinopsis</h2>
          </div>
          <p id="sinopsis">
            {{ sinopsis_movie }}
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
        <div id="Trailer trailer_movie">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/{{ trailer_movie }}"
            frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
      </div>
      <div id="Opinions">
        <h2 class="OpnionTitle">Comentarios y Valoraciones</h2>
        <div id="MovieContentOpinion">
          <div id="MovieContentOpinionHeader">
            <button id="añadirComentario" @click="añadirComentario;">
              Añadir Comentario
            </button>
          </div>
          <div id="AddComment"></div>
          <div id="CommentArea" style="display: none">
            <textarea
              name="comment"
              id="CommentTextArea comment"
              cols="90"
              rows="10"
            ></textarea>
            <button id="btnComentar" @click="comentar">Comentar</button>
          </div>
          <div id="Comments" style="display: none">
            <div id="UserArea user">
              <div class="img_user_area">
                <img
                  id="img_user"
                  src="../../assets/img/cameraLogo.png"
                  alt=""
                />
              </div>
              <div class="username_area">
                <h4 id="username_user">{{ username_user }}</h4>
              </div>
            </div>
            <div id="user_comment_area">
              <p id="user_comment">{{ user_comment }}</p>
            </div>
            <div id="date_comment_area">
              <p id="date_comment">{{ date_comment }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MovieContent',
  components: {},
  data() {
    return {
      movie: {
        img_movie: '',
        title_movie: '',
        date_movie: '',
        category_movie: [],
        directors_movie: [],
        actors_movie: [],
        rating_movie: '',
        sinopsis_movie: '',
        trailer_movie: ''
      },

      user: {
        img_user: '',
        username_user: '',
        commentaries: [],
        user_comment: '',
        date_comment: ''
      }
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
      user_comment = document.getElementById('CommentTextArea').value

      document.getElementById(
        'user_comment_area'
      ).innerHTML = `<p id="Pcomentario">${user_comment}</p>`
      this.commentaries.push(user_comment)

      document.getElementById('CommentArea').style.display = 'none'
      document.getElementById('btnComentar').style.display = 'none'
      document.getElementById('añadirComentario').style.display = 'flex'
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
  height: 70vh;
  width: 25vw;
}
img#img_movie {
  height: 71vh;
  width: 25vw;
}
div#MovieContentSinopsis {
  background-color: #000;
  border-radius: 5%;
}
p#SinopsisText {
  padding: 2%;
  font-size: 1rem;
}
h2.SinopsisHeader {
  color: #4e9f3d;
  font-size: 2.5vw;
  margin: 1%;
}
h2 {
  color: #4e9f3d;
  font-size: 2vw;
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
  height: 5vh;
}
div#Opinions {
  padding: 1%;
  background-color: #000;
  border-radius: 3%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}
div#MovieContentOpinion {
  display: flex;
}
div#date_comment_area {
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
  width: 80%;
}
label {
  font-size: 1.5vw;
}
li {
  font-size: 1vw;
}
button#añadirComentario {
  font-size: 1.5vh;
}
button#btnComentar {
  font-size: 1.5vh;
  margin-top: -6vh;
  font-size: 1.5vh;
  margin-left: 75vh;
  z-index: 1;
  padding: 1%;
  color: #000;
}
p#date_comment {
  font-size: 1vw;
  color: #000;
  background-color: #fff;
}

p#Pcomentario {
  color: #000;
  background-color: #fff;
  border-radius: 10%;
}
div#Comments {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-content: flex-start;
  justify-content: center;
  background-color: #fff;
  color: #000;
  width: 70vh;
}
</style>
