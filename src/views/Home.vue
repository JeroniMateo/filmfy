<Header/>
<template>
  <main>
      <div id="cover" class="d-flex align-content-end justify-content-center">
        <div class="d-flex flex-column justify-content-center align-content-end mt-auto mx-auto">
          <div class="d-flex flex-column">
            <span class="heading"><strong>Sigue las mejores películas.</strong></span>
            <span class="heading"><strong>Crea listas de contenido.</strong></span>
            <span class="heading"><strong>Comparte con tus amigos.</strong></span>
          </div>
          <div class="mt-3">
            <button type="button" class="btn btn-primary">Únete</button>
          </div>
        </div>
      <div>

      </div>
    </div>
    <div id="top-movies">

    </div>
    <div id="features">

    </div>
    <div id="top-content">
      <div id="last-comments"></div>
      <div id="popular lists"></div>
    </div>
  </main>
</template>
<Footer/>

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
      topMovies: null,
      topMoviesId: [4, 33, 44, 53, 183, 229],
    }
  },
  methods: {
    getTopMovies() {
      this.topMoviesId.forEach( item => {
          fetch("https://filmfy-api.ddns.net/api/movies/1",
              {
                method: 'GET',
                mode: 'cors',
                headers: {
                  'Accept': 'application/json',
                  'Content-type': 'application/json',
                  'Access-Control-Allow-Origin': '*'
                }
              })
            .then(response => response.json())
            .then(data => {
              console.log(data)
              this.topMovies = data
            })
         }
      )
    }
  },
  beforeMount() {
    this.getTopMovies()
  }
}
</script>

<style scoped>

#main {
  display: flex;
  align-items: center;
}

#cover {
  width: 100%;
  height: 45vh;
  background-repeat: no-repeat;
  background: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0),
      rgba(0, 0, 0, 100)
  ), url("../assets/img/MoviesIMG/doctor-strange-3-cover-page.png") center;
}

.heading {
  font-size: 1.5rem;
}

</style>
