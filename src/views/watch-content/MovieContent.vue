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
              // Main Info
              <div class="MainInfo card-body">
                <ul class="list-group list-group-flush">
                  <li class="list-group-item" id="MovieContentTitle">
                    // Title
                    <label for="">Titulo:</label>
                    <p id="title_movie">{{ title }}</p>
                  </li>
                  <li class="list-group-item" id="MovieContentYear">
                    // Year
                    <label for="">Fecha:</label>
                    <p id="date_movie">{{ date }}</p>
                  </li>
                  <li class="list-group-item" id="MovieContentGenre">
                    // Category
                    <label for="">Categoria:</label>
                    <p id="category_movie">{{ category }}</p>
                  </li>
                  <li class="list-group-item" id="MovieContentGenre">
                    // Runtime
                    <label for="">Duración:</label>
                    <p id="category_movie">{{ runtime }}</p>
                  </li>
                  <li class="list-group-item" id="MovieContentDirectors">
                    // Directors
                    <label for="">Directores:</label>
                    <p id="directors_movie">{{ directors }}</p>
                  </li>
                  <li class="list-group-item" id="MovieContentActors">
                    // Actors
                    <label for="">Actores:</label>
                    <p id="actors_movie">{{ actors }}</p>
                  </li>
                  // Valoración, Favoritos y Vista
                  <div id="FavWatchRate">
                    <li class="list-group-item" id="MovieContentRuntime">
                      // Valoration
                      <label for="">Valoracíon:</label>
                      <p id="rating_movie">{{ rating }}</p>
                    </li>
                    <li
                      v-if="fav"
                      class="list-group-item"
                      id="MovieContentRuntime"
                    >
                      <label for="Fav"
                        ><button @click="addFav">
                          <i class="fa-solid fa-heart"></i></button
                      ></label>
                    </li>
                    <li v-else class="list-group-item" id="MovieContentRuntime">
                      <label for="notFav"
                        ><button @click="addFav">
                          <i class="fa-solid fa-heart"></i></button
                      ></label>
                    </li>
                    <li
                      v-if="watch"
                      class="list-group-item"
                      id="MovieContentRuntime"
                    >
                      <label for="Watch">
                        <button @click="addWatch">
                          <i class="fa-solid fa-eye"></i></button
                      ></label>
                    </li>
                    <li v-else class="list-group-item" id="MovieContentRuntime">
                      <label for="notWatch">
                        <button @click="addWatch">
                          <i class="fa-solid fa-eye-slash"></i></button
                      ></label>
                    </li>
                  </div>
                </ul>
              </div>
            </div>
          </div>
        </div>
        // sinopsis
        <div id="MovieContentSinopsis">
          <p id="sinopsis">
            {{ sinopsis }}
          </p>
        </div>
        // Valoración
        <div id="MovieContentValoration">
          <h2>Valoración:</h2>
          <button class="Rating" @click="valorar">
            <i class="fa-solid fa-star"></i>
          </button>
          <br />
          <div class="valoracion" id="starsValoration" style="display: none">
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
        // Trailer
        <!--Trailer play automaticaly-->
        <div id="Trailer trailer_movie">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/{{ trailer }}"
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
            // Añadir Comentario
            <button id="añadir_comentario" @click="añadir_comentario;">
              Añadir Comentario
            </button>
          </div>
          <div id="AddComment"></div>
          // Text Area Comentario
          <div id="CommentArea" style="display: none">
            <textarea
              name="comment"
              id="user_comment"
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
                <h4 id="username_user">{{ username }}</h4>
              </div>
            </div>
            <div id="user_comment_area"></div>
            <div id="date_comment_area">
              <p id="date_comment">{{ date_comment }}</p>
              <div id="CommentRating">
                <small class="like"
                  ><i class="fa-solid fa-thumbs-up"></i
                ></small>
                <small class="dislike"
                  ><i class="fa-solid fa-thumbs-down"></i
                ></small>
                <button @click="responder">Responder<i class="fa-solid fa-share-nodes"></i> </button>
              </div>
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
  data () {
    return {
      img: '',
      title: '',
      date: '',
      category: [],
      directors: [],
      actors: [],
      rating: '',
      sinopsis: '',
      trailer: '',
      runtime: '',

      fav: false,
      watch: false,

      img_user: '',
      username: '',
      commentaries: [],
      user_comment: '',
      date_comment: '',

      log: false
    }
  },
  methods: {
    añadir_comentario () {
      if (this.log === false) {
        alert('Debes iniciar sesión para poder comentar')
      } else if (this.log === true) {
        document.getElementById('AddComment').style.display = 'block'
        document.getElementById('CommentArea').style.display = 'block'
        document.getElementById('añadir_comentario').style.display = 'none'
      }
    },
    comentar () {
      if (this.log === false) {
        alert('Debes iniciar sesión para poder comentar')
      } else if (this.log === true) {
        document.getElementById('Comments').style.display = 'flex'
        this.user_comment = document.getElementById('user_comment').value

        document.getElementById(
          'user_comment_area'
        ).innerHTML = `<p id="Pcomentario">${this.user_comment}</p>`
        this.commentaries.push(this.user_comment)

        document.getElementById('CommentArea').style.display = 'none'
        document.getElementById('btnComentar').style.display = 'none'
        document.getElementById('añadir_comentario').style.display = 'flex'
      }
    },
    valorar () {
      if (this.log === false) {
        alert('Debes iniciar sesión para poder valorar')
      } else if (this.log === true) {
        document.getElementById('starsValoration').style.display = 'flex'
      }
    },
    addFav () {
      if (this.log === false) {
        alert('Debes iniciar sesión para poder añadir a favoritos')
      } else if (this.log === true) {
        if (this.fav === false) {
          this.fav = true
        } else if (this.fav === true) {
          this.fav = false
        }
      }
    },
    addWatch () {
      if (this.log === false) {
        alert('Debes iniciar sesión para poder añadir a la lista de ver')
      } else if (this.log === true) {
        if (this.watch === false) {
          this.watch = true
        } else if (this.watch === true) {
          this.watch = false
        }
      }
    },
    responder () {
      if (this.log === false) {
        alert('Debes iniciar sesión para poder responder')
      } else if (this.log === true) {
        document.getElementById('Comments').style.display = 'flex'
        document.getElementById(
          'user_comment_area'
        ).innerHTML = `<p id="Pcomentario">${this.user_comment}</p>`
        document.getElementById('CommentArea').style.display = 'none'
        document.getElementById('btnComentar').style.display = 'none'
        document.getElementById('añadir_comentario').style.display = 'flex'
      }
    }
  }
}
</script>

<style scoped>
:root {
  --color-inactivo: #787b66;
  --color-hover: #e49e06;
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
  background-color: #0f0505;
  border-radius: 5%;
}
p#SinopsisText {
  padding: 2%;
  font-size: 1rem;
}
h2.SinopsisHeader {
  color: #00c740;
  font-size: 2.5vw;
  margin: 1%;
}
h2 {
  color: #00c740;
  font-size: 2vw;
}
div#SinopsisTitle {
  background-color: #0f0505;
  border-radius: 5%;
  display: flex;
}
div#MovieContentValoration {
  background-color: #0f0505;
  color: #f7f7f5;
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
  background-color: #0f0505;
  border-radius: 3%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}
div#MovieContentOpinion {
  display: flex;
}
div#date_comment_area {
  background-color: #f7f7f5;
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
button#añadir_comentario {
  font-size: 1.5vh;
}
button#btnComentar {
  font-size: 1.5vh;
  margin-top: -6vh;
  font-size: 1.5vh;
  margin-left: 75vh;
  z-index: 1;
  padding: 1%;
  color: #0f0505;
}
p#date_comment {
  font-size: 1vw;
  color: #0f0505;
  background-color: #f7f7f5;
}

p#Pcomentario {
  color: #0f0505;
  background-color: #f7f7f5;
  border-radius: 10%;
}
div#Comments {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-content: flex-start;
  justify-content: center;
  background-color: #f7f7f5;
  color: #0f0505;
  width: 70vh;
}
</style>
