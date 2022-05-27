<template>
  <div class="general">

    <div class="container">
      <h2 class="title">{{ this.movie.title }} ({{this.date.getFullYear()}})</h2>
    </div>

    <div class="container d-flex justify-content-between">

      <div class="row big-width">
        <MovieDetailedCard :movieID="movieID" class="col-3"/>

        <div class="d-flex flex-column align-items-start justify-content-center contentData col-6 ps-5">
          <Tabs :movie="this.movie"/>
        </div>

        <div class="col-3 d-flex align-items-center flex-column p-0">
          <AsideDetailedMovie :movie="this.movie"/>
        </div>
      </div>


    </div>

    <div class="container py-4">
      <div class="section-heading">
        <h2 class="sinopsis mb-0">Sinopsis</h2>
      </div>
      <div class="description-div pt-3">
        <span class="description ">{{ this.movie.description }}</span>
      </div>
    </div>

    <div class="container py-4">
      <div class="section-heading">
        <h2 class="sinopsis mb-0">Comentarios</h2>
      </div>
      <div v-if="this.contentComment" class="description-div-comments py-3">
        <CommentsMovie v-for="comment of this.comments" :key="comment" :comment="comment" />
      </div>
      <div v-else class="pt-5">
        <p style="font-size: 25px; color: #00c740" class="text-center">Nadie ha comentado todavía esta película, sé tu el primero!</p>
      </div>
    </div>

  </div>
</template>

<script>
import MovieDetailedCard from "@/components/movies/movie-card/MovieDetailedCard";
import Tabs from "@/components/movies/detailed-movie-page/Tabs";
import AsideDetailedMovie from "@/components/movies/detailed-movie-page/AsideDetailedMovie";
import CommentsMovie from "@/components/movies/detailed-movie-page/CommentsMovie";

export default {
  name: "DetailedMoviePage",
  components: {CommentsMovie, AsideDetailedMovie, Tabs, MovieDetailedCard},

  data() {
    return {
      movieID: this.$route.params.movie,
      movie: [],
      comments: [],
      date: "",
      directors: "Directores : ",
      writters: "Escritores : ",
      actors: "Actores : ",
      contentComment: true
    }
  },

  async beforeMount() {
    this.fetchMovie()
  },

  methods: {
    async fetchMovie() {
      const promiseMovie = await fetch(`http://filmfy-api.ddns.net/api/movies/${this.movieID}`)
      const moviesData = await promiseMovie.json()
      this.movie = moviesData
      this.date = new Date(moviesData.release_date)
      await this.fetchComments()
    },

    async fetchComments() {
      const promise = await fetch(`http://filmfy-api.ddns.net/api/comments-movie/${this.movieID}`)
      const commentsData = await promise.json()
      this.comments = commentsData
      await this.checkData()
    },

    async checkData() {
      if (this.comments.length === 0){
        this.contentComment = false
      }else {
        this.contentComment = true
      }
    },

  }
}
</script>

<style scoped>

.big-width {
  width: inherit;
}

.title {
  font-family: Graphik-Regular-Web, sans-serif;
  font-weight: 400;
  letter-spacing: .065em;
  margin-bottom: 3rem;
}

.description-div-comments {
  text-align: left;
  width: 40rem;
}
.description-div {
  text-align: left;
  margin-right: 10vw;
}

.description {
  color: #c9c9c9;
  line-height: 25px;
}

.sinopsis {
  text-align: left;
}

.section-heading {
  display: flex;
  border-bottom: 1px solid white;
  color: white;
  font-family: Graphik-Regular-Web, sans-serif;
  font-size: 1rem;
  font-weight: 400;
  letter-spacing: .065em;
  margin-bottom: 0.76923077rem;
  margin-top: 0;
  padding-bottom: 5px;
  text-transform: uppercase;
}

.general {
  background-color: black;
  padding-top: 4rem;
}

</style>