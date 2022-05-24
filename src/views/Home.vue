<Header />
<template>
  <main>
    <section id="cover" class="d-flex align-content-end justify-content-center">
      <div
        class="d-flex flex-column justify-content-center align-content-end mt-auto mx-auto"
      >
        <div class="d-flex flex-column">
          <span class="heading"
            ><strong>Sigue las mejores películas.</strong></span
          >
          <span class="heading"
            ><strong>Crea listas de contenido.</strong></span
          >
          <span class="heading"><strong>Comparte con tus amigos.</strong></span>
        </div>
        <div class="mt-3">
          <button type="button" class="btn btn-primary" @click="register">
            Únete
          </button>
        </div>
      </div>
    </section>

    <section class="d-flex justify-content-center">
      <div id="top-movies" class="container-md row justify-content-between p-5">
        <div
          class="movie col-xl-2 col-lg-4 col-md-6 col-12"
          v-for="movie in topMoviesImages"
          :key="movie"
        >
          <a href="#"><img :src="movie" class="rounded" alt="top-movie" /></a>
        </div>
      </div>
    </section>

    <section class="d-flex justify-content-center">
      <div class="container-md highlights">
        <a class="panel promopanel has-icon" href=""
          ><span class="icon"><i class="fa-solid fa-heart"></i></span>
          <p>
            No te pierdas ninguna de las películas que te gustan. ¡Las podrás
            guardar!
          </p></a
        >
        <a class="panel promopanel has-icon" href=""
          ><span class="icon"><i class="fa-solid fa-thumbs-up"></i></span>
          <p>
            Da likes, guarda listas y organiza tus películas favoritas como
            prefieras.
          </p></a
        >
        <a class="panel promopanel has-icon" href=""
          ><span class="icon"><i class="fa-solid fa-film"></i></span>
          <p>
            Escribe comentarios, puntúa y debate con otros usuarios. Conviértete
            en crítico.
          </p></a
        >
        <a class="panel promopanel has-icon" href=""
          ><span class="icon"><i class="fa-solid fa-address-book"></i></span>
          <p>
            Comparte tus listas, opiniones y películas con quien quieras, cuando
            sea.
          </p></a
        >
      </div>
    </section>

    <section id="popular-content" class="mt-5 d-flex justify-content-start">
      <div class="container-md">
        <div class="row">
          <div class="comments col-7">
            <span class="section-heading d-flex my-4">Últimos comentarios</span>
            <ul>
              <hr />

              <li class="comment d-flex flex-row">
                <div class="comment-movie-image">
                  <img
                    src="http://filmfy-api.ddns.net/movie_images/el-padrino.jpg"
                    width="115"
                    height="170"
                    alt=""
                  />
                </div>
                <div class="comment-details p-3">
                  <div class="comment-movie-details d-flex">
                    <span class="comment-movie-title"
                      ><strong>El Padrino</strong></span
                    >
                    <span class="comment-movie-year mx-2">1972</span>
                  </div>
                  <div class="comment-user-details d-flex flex-row mt-2">
                    <img src="#" width="30" height="30" alt="" />
                    <small class="comment-user-name mx-2">Toni García</small>
                    <div class="comment-rating mx-2">
                      <i class="fa-solid fa-star"></i>
                      <i class="fa-solid fa-star"></i>
                      <i class="fa-solid fa-star"></i>
                      <i class="fa-solid fa-star-half-stroke"></i>
                      <i class="fa-regular fa-star"></i>
                    </div>
                  </div>
                  <div class="comment-content d-flex mt-2">
                    <p class="comment-text text-start">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Asperiores ea eos nemo odit omnis soluta velit. Accusamus
                      ad culpa ullam!
                    </p>
                  </div>
                  <div class="comment-likes d-flex flex-row">
                    <span>❤</span>
                    <span class="mx-1">253</span>
                  </div>
                </div>
              </li>

              <hr />

              <li class="comment d-flex flex-row">
                <div class="comment-movie-image">
                  <img
                    src="http://filmfy-api.ddns.net/movie_images/el-padrino.jpg"
                    width="115"
                    height="170"
                    alt=""
                  />
                </div>
                <div class="comment-details p-3">
                  <div class="comment-movie-details d-flex">
                    <span class="comment-movie-title"
                      ><strong>El Padrino</strong></span
                    >
                    <span class="comment-movie-year mx-2">1972</span>
                  </div>
                  <div class="comment-user-details d-flex flex-row mt-2">
                    <img src="#" width="30" height="30" alt="" />
                    <small class="comment-user-name mx-2">Toni García</small>
                    <div class="comment-rating mx-2">
                      <i class="fa-solid fa-star"></i>
                      <i class="fa-solid fa-star"></i>
                      <i class="fa-solid fa-star"></i>
                      <i class="fa-solid fa-star-half-stroke"></i>
                      <i class="fa-regular fa-star"></i>
                    </div>
                  </div>
                  <div class="comment-content d-flex mt-2">
                    <p class="comment-text text-start">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Asperiores ea eos nemo odit omnis soluta velit. Accusamus
                      ad culpa ullam!
                    </p>
                  </div>
                  <div class="comment-likes d-flex flex-row">
                    <span>❤</span>
                    <span class="mx-1">253</span>
                  </div>
                </div>
              </li>

              <hr />

              <li class="comment d-flex flex-row">
                <div class="comment-movie-image">
                  <img
                    src="http://filmfy-api.ddns.net/movie_images/el-padrino.jpg"
                    width="115"
                    height="170"
                    alt=""
                  />
                </div>
                <div class="comment-details p-3">
                  <div class="comment-movie-details d-flex">
                    <span class="comment-movie-title"
                      ><strong>El Padrino</strong></span
                    >
                    <span class="comment-movie-year mx-2">1972</span>
                  </div>
                  <div class="comment-user-details d-flex flex-row mt-2">
                    <img src="#" width="30" height="30" alt="" />
                    <small class="comment-user-name mx-2">Toni García</small>
                    <div class="comment-rating mx-2">
                      <i class="fa-solid fa-star"></i>
                      <i class="fa-solid fa-star"></i>
                      <i class="fa-solid fa-star"></i>
                      <i class="fa-solid fa-star-half-stroke"></i>
                      <i class="fa-regular fa-star"></i>
                    </div>
                  </div>
                  <div class="comment-content d-flex mt-2">
                    <p class="comment-text text-start">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Asperiores ea eos nemo odit omnis soluta velit. Accusamus
                      ad culpa ullam!
                    </p>
                  </div>
                  <div class="comment-likes d-flex flex-row">
                    <span>❤</span>
                    <span class="mx-1">253</span>
                  </div>
                </div>
              </li>

              <hr />

              <li class="comment d-flex flex-row">
                <div class="comment-movie-image">
                  <img
                    src="http://filmfy-api.ddns.net/movie_images/el-padrino.jpg"
                    width="115"
                    height="170"
                    alt=""
                  />
                </div>
                <div class="comment-details p-3">
                  <div class="comment-movie-details d-flex">
                    <span class="comment-movie-title"
                      ><strong>El Padrino</strong></span
                    >
                    <span class="comment-movie-year mx-2">1972</span>
                  </div>
                  <div class="comment-user-details d-flex flex-row mt-2">
                    <img src="#" width="30" height="30" alt="" />
                    <small class="comment-user-name mx-2">Toni García</small>
                    <div class="comment-rating mx-2">
                      <i class="fa-solid fa-star"></i>
                      <i class="fa-solid fa-star"></i>
                      <i class="fa-solid fa-star"></i>
                      <i class="fa-solid fa-star-half-stroke"></i>
                      <i class="fa-regular fa-star"></i>
                    </div>
                  </div>
                  <div class="comment-content d-flex mt-2">
                    <p class="comment-text text-start">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Asperiores ea eos nemo odit omnis soluta velit. Accusamus
                      ad culpa ullam!
                    </p>
                  </div>
                  <div class="comment-likes d-flex flex-row">
                    <span>❤</span>
                    <span class="mx-1">253</span>
                  </div>
                </div>
              </li>

              <hr />
            </ul>
          </div>

          <section class="lists col-4 mx-5">
            <span class="section-heading d-flex my-4">Listas populares</span>

            <hr />

            <div class="list -overlapped -stacked d-flex flex-column">
              <a class="list-link">
                <div class="list-link-stacked clear">
                  <ul class="poster-list -overlapped -p70">
                    <li class="react-component poster film-poster listitem">
                      <div>
                        <img
                          src="http://filmfy-api.ddns.net/movie_images/el-padrino.jpg"
                          width="80"
                          height="130"
                          alt="Donnie Darko"
                          class="image"
                        />
                      </div>
                    </li>
                    <li
                      class="react-component poster film-poster film-poster-51618 listitem"
                    >
                      <div>
                        <img
                          src="http://filmfy-api.ddns.net/movie_images/el-padrino.jpg"
                          width="80"
                          height="130"
                          alt="Being John Malkovich"
                          class="image"
                        />
                      </div>
                    </li>
                    <li
                      class="react-component poster film-poster film-poster-51871 listitem"
                    >
                      <div>
                        <img
                          src="http://filmfy-api.ddns.net/movie_images/el-padrino.jpg"
                          width="80"
                          height="130"
                          alt="Minority Report"
                          class="image"
                        />
                      </div>
                    </li>
                    <li
                      class="react-component poster film-poster film-poster-50662 listitem"
                    >
                      <div>
                        <img
                          src="http://filmfy-api.ddns.net/movie_images/el-padrino.jpg"
                          width="80"
                          height="130"
                          alt="eXistenZ"
                          class="image"
                        />
                      </div>
                    </li>
                    <li
                      class="react-component poster film-poster film-poster-51480 listitem"
                    >
                      <div>
                        <img
                          src="http://filmfy-api.ddns.net/movie_images/el-padrino.jpg"
                          width="80"
                          height="130"
                          alt="A.I. Artificial Intelligence"
                          class="image"
                        />
                      </div>
                    </li>
                  </ul>
                </div>
              </a>
              <div class="list-content d-flex flex-row mt-2">
                <p class="list-title d-flex align-content-center">
                  <strong>Lista de películas</strong>
                </p>
                <div class="mx-4">
                  <img class="user-img" src="#" width="30" height="30" alt="" />
                  <small class="comment-user-name mx-2">Toni García</small>
                  <span><i class="fa-solid fa-thumbs-up"></i></span>
                  <span class="mx-1">253</span>
                </div>
              </div>
            </div>

            <div class="list -overlapped -stacked d-flex flex-column">
              <a class="list-link">
                <div class="list-link-stacked clear">
                  <ul class="poster-list -overlapped -p70">
                    <li class="react-component poster film-poster listitem">
                      <div>
                        <img
                          src="http://filmfy-api.ddns.net/movie_images/el-padrino.jpg"
                          width="80"
                          height="130"
                          alt="Donnie Darko"
                          class="image"
                        />
                      </div>
                    </li>
                    <li
                      class="react-component poster film-poster film-poster-51618 listitem"
                    >
                      <div>
                        <img
                          src="http://filmfy-api.ddns.net/movie_images/el-padrino.jpg"
                          width="80"
                          height="130"
                          alt="Being John Malkovich"
                          class="image"
                        />
                      </div>
                    </li>
                    <li
                      class="react-component poster film-poster film-poster-51871 listitem"
                    >
                      <div>
                        <img
                          src="http://filmfy-api.ddns.net/movie_images/el-padrino.jpg"
                          width="80"
                          height="130"
                          alt="Minority Report"
                          class="image"
                        />
                      </div>
                    </li>
                    <li
                      class="react-component poster film-poster film-poster-50662 listitem"
                    >
                      <div>
                        <img
                          src="http://filmfy-api.ddns.net/movie_images/el-padrino.jpg"
                          width="80"
                          height="130"
                          alt="eXistenZ"
                          class="image"
                        />
                      </div>
                    </li>
                    <li
                      class="react-component poster film-poster film-poster-51480 listitem"
                    >
                      <div>
                        <img
                          src="http://filmfy-api.ddns.net/movie_images/el-padrino.jpg"
                          width="80"
                          height="130"
                          alt="A.I. Artificial Intelligence"
                          class="image"
                        />
                      </div>
                    </li>
                  </ul>
                </div>
              </a>
              <div class="list-content d-flex flex-row mt-2">
                <p class="list-title d-flex align-content-center">
                  <strong>Lista de películas</strong>
                </p>
                <div class="mx-4">
                  <img class="user-img" src="#" width="30" height="30" alt="" />
                  <small class="comment-user-name mx-2">Toni García</small>
                  <span><i class="fa-solid fa-thumbs-up"></i></span>
                  <span class="mx-1">253</span>
                </div>
              </div>
            </div>

            <div class="list -overlapped -stacked d-flex flex-column">
              <a class="list-link">
                <div class="list-link-stacked clear">
                  <ul class="poster-list -overlapped -p70">
                    <li class="react-component poster film-poster listitem">
                      <div>
                        <img
                          src="http://filmfy-api.ddns.net/movie_images/el-padrino.jpg"
                          width="80"
                          height="130"
                          alt="Donnie Darko"
                          class="image"
                        />
                      </div>
                    </li>
                    <li
                      class="react-component poster film-poster film-poster-51618 listitem"
                    >
                      <div>
                        <img
                          src="http://filmfy-api.ddns.net/movie_images/el-padrino.jpg"
                          width="80"
                          height="130"
                          alt="Being John Malkovich"
                          class="image"
                        />
                      </div>
                    </li>
                    <li
                      class="react-component poster film-poster film-poster-51871 listitem"
                    >
                      <div>
                        <img
                          src="http://filmfy-api.ddns.net/movie_images/el-padrino.jpg"
                          width="80"
                          height="130"
                          alt="Minority Report"
                          class="image"
                        />
                      </div>
                    </li>
                    <li
                      class="react-component poster film-poster film-poster-50662 listitem"
                    >
                      <div>
                        <img
                          src="http://filmfy-api.ddns.net/movie_images/el-padrino.jpg"
                          width="80"
                          height="130"
                          alt="eXistenZ"
                          class="image"
                        />
                      </div>
                    </li>
                    <li
                      class="react-component poster film-poster film-poster-51480 listitem"
                    >
                      <div>
                        <img
                          src="http://filmfy-api.ddns.net/movie_images/el-padrino.jpg"
                          width="80"
                          height="130"
                          alt="A.I. Artificial Intelligence"
                          class="image"
                        />
                      </div>
                    </li>
                  </ul>
                </div>
              </a>
              <div class="list-content d-flex flex-row mt-2">
                <p class="list-title d-flex align-content-center">
                  <strong>Lista de películas</strong>
                </p>
                <div class="mx-4">
                  <img class="user-img" src="#" width="30" height="30" alt="" />
                  <small class="comment-user-name mx-2">Toni García</small>
                  <span><i class="fa-solid fa-thumbs-up"></i></span>
                  <span class="mx-1">253</span>
                </div>
              </div>
            </div>

            <div class="list -overlapped -stacked d-flex flex-column">
              <a class="list-link">
                <div class="list-link-stacked clear">
                  <ul class="poster-list -overlapped -p70">
                    <li class="react-component poster film-poster listitem">
                      <div>
                        <img
                          src="http://filmfy-api.ddns.net/movie_images/el-padrino.jpg"
                          width="80"
                          height="130"
                          alt="Donnie Darko"
                          class="image"
                        />
                      </div>
                    </li>
                    <li
                      class="react-component poster film-poster film-poster-51618 listitem"
                    >
                      <div>
                        <img
                          src="http://filmfy-api.ddns.net/movie_images/el-padrino.jpg"
                          width="80"
                          height="130"
                          alt="Being John Malkovich"
                          class="image"
                        />
                      </div>
                    </li>
                    <li
                      class="react-component poster film-poster film-poster-51871 listitem"
                    >
                      <div>
                        <img
                          src="http://filmfy-api.ddns.net/movie_images/el-padrino.jpg"
                          width="80"
                          height="130"
                          alt="Minority Report"
                          class="image"
                        />
                      </div>
                    </li>
                    <li
                      class="react-component poster film-poster film-poster-50662 listitem"
                    >
                      <div>
                        <img
                          src="http://filmfy-api.ddns.net/movie_images/el-padrino.jpg"
                          width="80"
                          height="130"
                          alt="eXistenZ"
                          class="image"
                        />
                      </div>
                    </li>
                    <li
                      class="react-component poster film-poster film-poster-51480 listitem"
                    >
                      <div>
                        <img
                          src="http://filmfy-api.ddns.net/movie_images/el-padrino.jpg"
                          width="80"
                          height="130"
                          alt="A.I. Artificial Intelligence"
                          class="image"
                        />
                      </div>
                    </li>
                  </ul>
                </div>
              </a>
              <div class="list-content d-flex flex-row mt-2">
                <p class="list-title d-flex align-content-center">
                  <strong>Lista de películas</strong>
                </p>
                <div class="mx-4">
                  <img class="user-img" src="#" width="30" height="30" alt="" />
                  <small class="comment-user-name mx-2">Toni García</small>
                  <span><i class="fa-solid fa-thumbs-up"></i></span>
                  <span class="mx-1">253</span>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </section>
  </main>
</template>
<Footer />

<script>
import Footer from '../components/basics/Footer.vue'
import Header from '../components/basics/Header.vue'

export default {
  name: 'Home',
  components: {
    Header,
    Footer
  },
  data () {
    return {
      topMoviesImages: [],
      topMoviesId: [4, 33, 53, 183, 229, 44]
    }
  },
  methods: {
    getTopMovies () {
      this.topMoviesId.forEach((item) => {
        fetch('http://filmfy-api.ddns.net/api/movies/' + item, {
          method: 'GET',
          mode: 'cors',
          headers: {
            Accept: 'application/json',
            'Content-type': 'application/json',
            'Access-Control-Allow-Origin': '*'
          }
        })
          .then((response) => response.json())
          .then((data) => {
            this.topMoviesImages.push('http://filmfy-api.ddns.net' + data.image)
          })
      })
    },
    register () {
      this.$router.push('/register')
    }
  },
  beforeMount () {
    this.getTopMovies()
  }
}
</script>

<style scoped>
main {
  background-color: #0f0505;
}

#cover {
  width: 100%;
  height: 45vh;
  background-repeat: no-repeat;
  background: linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 100)),
    url('../assets/img/MoviesIMG/doctor-strange-3-cover-page.png') center;
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
  border: none;
  box-shadow: inset 0 1px 0 hsl(0deg 0% 100% / 10%);
  box-sizing: border-box;
  display: block;
  margin-bottom: 10px;
  width: 310px;
}

.promopanel {
  background-color: #242424;
  padding: 16px 20px 18px;
}

.panel {
  background-color: #242424;
  border: 1px solid #787b66;
  border-radius: 3px;
  color: #f7f7f5;
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

ul,
ol {
  list-style: none;
}

div > svg {
  color: #00c740;
}

.comment-movie-title,
.list-title {
  font-size: 1.1rem;
}

.comment-movie-year {
  display: flex;
  align-items: center;
  font-size: 0.8rem;
  color: #242424;
}

.comment-text {
  font-size: 0.9rem;
}

/** **/

.poster-list.-overlapped.-p70 .poster,
.poster-list.-overlapped.-p150 .poster {
  box-shadow: 2px 0 7px #0f0505;
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
  box-shadow: 0 1px 3px #242424;
}
.poster,
.poster-container {
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
