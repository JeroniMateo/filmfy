<Header/>
<template>
  <main>
      <section id="cover" class="container d-flex align-content-end justify-content-center">
        <div class="d-flex flex-column justify-content-center align-content-end mt-auto mx-auto">
          <div class="d-flex flex-column">
            <span class="heading"><strong>Sigue las mejores películas.</strong></span>
            <span class="heading"><strong>Crea listas de contenido.</strong></span>
            <span class="heading"><strong>Comparte con tus amigos.</strong></span>
          </div>
          <div class="mt-3">
            <button type="button" class="btn btn-primary" @click="unete">Únete</button>
          </div>
        </div>
    </section>

    <section class="d-flex justify-content-center">
      <div id="top-movies" class="container-md row justify-content-between p-5">
        <div class="movie col-xl-2 col-md-4 col-sm-6 col-12 p-2" v-for="movie in topMovies">
          <a :href="baseURL + '/movies/' + movie.id"><img :src="'http://filmfy-api.ddns.net' + movie.image" class="rounded" :alt="movie.title"/></a>
        </div>
      </div>
    </section>

    <section class="d-flex justify-content-center">
      <div class="container-md highlights row row-cols-1 row-cols-sm-1 row-cols-lg-2 row-cols-xl-4 row-cols-xxl-4 d-flex justify-content-center">
        <a class="col panel promopanel has-icon" href=""><span class="icon"><i class="fa-solid fa-heart"></i></span><p>No te pierdas ninguna de las películas que te gustan. ¡Las podrás guardar!</p></a>
        <a class="col panel promopanel has-icon" href=""><span class="icon"><i class="fa-solid fa-thumbs-up"></i></span><p>Da likes, guarda listas y organiza tus películas favoritas como prefieras.</p></a>
        <a class="col panel promopanel has-icon" href=""><span class="icon"><i class="fa-solid fa-film"></i></span><p>Escribe comentarios, puntúa y debate con otros usuarios. Conviértete en crítico.</p></a>
        <a class="col panel promopanel has-icon" href=""><span class="icon"><i class="fa-solid fa-address-book"></i></span><p>Comparte tus listas, opiniones y películas con quien quieras, cuando sea.</p></a>
      </div>
    </section>

    <section id="popular-content" class="mt-5 d-flex justify-content-start">
      <div class="container-md">
        <div class="row d-flex justify-content-center">
          <div class="comments col-12 col-xxl-7 col-xl-5 d-flex flex-column">
            <span class="section-heading d-flex my-4">Últimos comentarios</span>
            <ul>
              <hr>
              <div v-for="comment in latestComments">

                <li class="comment d-flex flex-row" >
                  <div class="comment-movie-image">
                    <img :src="'http://filmfy-api.ddns.net' + comment.m_image" width="115" height="170" :alt="comment.m_title"/>
                  </div>
                  <div class="comment-details p-3">
                    <div class="comment-movie-details d-flex">
                      <span class="comment-movie-title"><strong>{{ comment.m_title }}</strong></span>
                      <span class="comment-movie-year mx-2">{{ comment.m_release.split('-')[0] }}</span>
                    </div>
                    <div class="comment-user-details d-flex flex-row mt-2">
                      <img :src="'http://filmfy-api.ddns.net' + comment.u_image" width="30" height="30" alt=""/>
                      <small class="comment-user-name mx-2" style="align-self:center;">{{ comment.u_name }}</small>
                      <div class="comment-rating mx-2">

                        <star-rating
                                     v-bind:round-start-rating="false"
                                     v-bind:rating="comment.rating"
                                     v-bind:max-rating="5"
                                     v-bind:increment="0.5"
                                     v-bind:read-only="false"
                                     v-bind:show-rating="false"
                                     active-color="#00c740"
                                     inactive-color="#fff"
                                     v-bind:star-size="20"
                        /> <!-- Lightgreen: #00c740 -->
                      </div>
                    </div>
                    <div class="comment-content d-flex mt-2">
                      <p class="comment-text text-start">{{ comment.body }}</p>
                    </div>
                    <div class="comment-likes d-flex flex-row">
                      <span>❤</span>
                      <span class="mx-1">{{ comment.likes }}</span>
                    </div>
                  </div>
                </li>

                <hr>
              </div>
            </ul>
          </div>

          <div class="lists col-12 col-xxl-4 col-xl-4 mx-5 d-flex flex-column">
            <span class="section-heading d-flex my-4">Listas populares</span>
            <hr>
            <div class="d-flex flex-column justify-content-center align-items-center">
            <div v-for="list in latestLists.slice(0,5)">

              <div class="list -overlapped -stacked d-flex flex-column">
                <a class="list-link" :href="baseURL + '/lists/' + list.l_id" style="text-decoration: none">
                  <div class="list-link-stacked clear">
                    <ul class="poster-list -overlapped -p70" v-for="movie in list.movies.slice(0,4)">

                      <li class="react-component poster film-poster listitem">
                        <div><img :src="'http://filmfy-api.ddns.net' + movie.image"
                            width="80" height="130" :alt="movie.title"
                            class="image">
                        </div>
                      </li>

                    </ul>
                  </div>
                </a>
                <div class="list-content d-flex flex-row mt-2">
                    <p class="list-title d-flex align-content-center"><strong>{{ list.l_title }}</strong></p>
                    <div class="mx-4">
                      <img class="user-img" :src="'http://filmfy-api.ddns.net' + list.user.profile_image" width="30" height="30" alt=""/>
                      <small class="comment-user-name mx-2">{{ list.user.name }}</small>
                        <span><i class="fa-solid fa-thumbs-up"></i></span>
                        <span class="mx-1">{{ list.l_likes }}</span>
                    </div>
                </div>
              </div>

            </div>
          </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>
<Footer />

<script>
import Footer from '../components/basics/Footer.vue'
import Header from '../components/basics/Header.vue'
import StarRating from 'vue-star-rating'


export default {
  name: 'Home',
  components: {
    Header,
    Footer,
    StarRating
  },
  data () {
    return {
      baseURL: window.origin,
      latestComments: '',
      latestLists: '',
      topMovies: [],
      topMoviesId: [22, 33, 53, 183, 229, 44],
    }
  },
  methods: {
    unete(){
      this.$router.push('/register')
    },
    getTopMovies() {
      this.topMoviesId.forEach( item => {
          fetch("http://filmfy-api.ddns.net/api/movies/" + item,
              {
                method: 'GET',
                headers: {
                  'Accept': 'application/json',
                  'Content-type': 'application/json',
                  'Access-Control-Allow-Origin': '*',
                  "Access-Control-Allow-Credentials" : true
                }
              })
            .then(response => response.json())
            .then(data => {
              this.topMovies.push(data)
            })
         }
      )
    },
    getLatestComments() {
      fetch("http://filmfy-api.ddns.net/api/comments-recent",
          {
            method: 'GET',
            headers: {
              'Accept': 'application/json',
              'Content-type': 'application/json',
              'Access-Control-Allow-Origin': '*',
              "Access-Control-Allow-Credentials" : true
            }
          })
          .then(response => response.json())
          .then(data => {
            this.latestComments = data
            console.log(this.latestComments)
          })
    },
    getLatestLists() {
      fetch("http://filmfy-api.ddns.net/api/lists-most-liked",
          {
            method: 'GET',
            headers: {
              'Accept': 'application/json',
              'Content-type': 'application/json',
              'Access-Control-Allow-Origin': '*',
              "Access-Control-Allow-Credentials" : true
            }
          })
          .then(response => response.json())
          .then(data => {
            this.latestLists = data
            console.log(this.latestLists)
          })
    },
  },
  beforeMount() {
    this.getTopMovies()
    this.getLatestComments()
    this.getLatestLists()
  },
}
</script>

<style scoped>

main {
  background-color: #000;
}

#cover {
  width: 100vw;
  height: 50vh;
  background-repeat: no-repeat;
  background: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0),
      rgba(0, 0, 0, 100)
  ), url("../assets/img/home/cover-img2.jpg") center;
  background-size: cover;


}

.heading {
  font-size: 1.5rem;
}

.section-heading {
  font-size: 1.2rem;
}

.movie > a > img {
  width: 12rem;
  height: 20rem;
  border: 2px solid #00c740;
}

.highlights {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

.highlights a.panel {
  box-shadow: inset 0 1px 0 hsl(0deg 0% 100% / 10%);
  box-sizing: border-box;
  display: block;
  margin-bottom: 10px;
  width: 310px;
  height: 6rem;
}

.promopanel {
  background: #456;
  padding: 16px 20px 18px;
}

.panel {
  background: #2c3440;
  border: 1px solid #456;
  border-radius: 3px;
  color: #fff;
  margin-bottom: 20px;
  padding: 10px;
  position: relative;
}

a {
  text-decoration: none;
}

.highlights .icon {
  float: left;
  height: 33px;
  margin: 0;
  position: relative;
  top: 5px;
  width: 50px;
}

.icon {
  display: flex;
  justify-content: center;
  align-items: flex-end;
  font-size: 1.5rem;
}

ul, ol {
  list-style: none;
}

div > svg {
  color: #00c740;
}

.comment-movie-title, .list-title {
 font-size: 1.1rem;
}

.comment-movie-year {
  display: flex;
  align-items: center;
  font-size: 0.8rem;
  color: lightgrey;
}

.comment-text {
  font-size: 0.9rem;
}

.list-title {
  width: 10rem;
}

/** **/


.poster-list.-overlapped.-p70 .poster, .poster-list.-overlapped.-p150 .poster {
  box-shadow: 2px 0 7px #000;
  margin-right: -25px;
}

.poster-list.-overlapped .poster:first-child {
  z-index: 15;
}

.poster-list.-overlapped .poster:nth-of-type(2) {
  z-index: 14;
}

.poster-list.-overlapped .poster:nth-of-type(3) {
  z-index: 13;
}

.poster-list.-overlapped .poster:nth-of-type(4) {
  z-index: 12;
}

.poster-list.-overlapped .poster:nth-of-type(5) {
  z-index: 11;
}

.poster-list.-overlapped .poster {
  float: left;
}
.poster {
  background: #161718;
  box-shadow: 0 1px 3px rgb(0 0 0 / 35%);
}
.poster, .poster-container {
  -webkit-background-clip: padding-box;
  border-radius: 4px;
  display: inline-block;
  overflow: hidden;
  position: relative;
}

.poster .image {
  border-radius: 4px;
  display: block;
}




</style>
