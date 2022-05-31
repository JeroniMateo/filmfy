<template>
  <div class="general">
    <div class="container">
      <h2 class="title">
        {{ this.movie.title }} ({{ this.date.getFullYear() }})
      </h2>
    </div>

    <div
      class="container d-flex justify-content-between align-items-center flex-column"
    >
      <div class="row big-width">
        <MovieDetailedCard
          :movieID="movieID"
          class="col-12 col-md-6 col-lg-3 my-3"
        />

        <div
          class="d-flex flex-column align-items-center justify-content-center contentData col-12 order-md-last col-lg-7 my-3"
        >
          <Tabs :movie="this.movie" />
        </div>

        <div
          class="col-12 col-md-6 col-lg-2 d-flex align-items-center justify-content-center justify-content-lg-start order-lg-last flex-column p-0 my-3"
        >
          <AsideDetailedMovie :movie="this.movie" />
        </div>
      </div>
    </div>

    <div class="container py-4">
      <div
        class="section-heading justify-content-center justify-content-lg-start"
      >
        <h2 class="sinopsis mb-0">Sinopsis</h2>
      </div>
      <div class="text-center text-lg-start pt-3">
        <span class="description">{{ this.movie.description }}</span>
      </div>
    </div>

    <div class="container py-4">
      <div
        class="section-heading justify-content-center justify-content-lg-start"
      >
        <h2 class="sinopsis mb-0">Trailer</h2>
      </div>
      <div class="d-flex justify-content-center pt-3">
        <iframe
          class="video"
          v-bind:src="this.movie.trailer"
          v-bind:title="this.movie.title"
          allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
    </div>

    <div class="container py-4">
      <div
        class="section-heading justify-content-center justify-content-lg-start"
      >
        <h2 class="sinopsis mb-0">Comentarios</h2>
      </div>
    </div>
    <div
      v-if="this.contentComment"
      class="container align-items-center flex-column align-items-lg-start"
    >
      <CommentsMovie
        v-for="comment of this.comments"
        :key="comment"
        :comment="comment"
      />
    </div>
    <div v-else class="pt-5">
      <p style="font-size: 25px; color: #00c740" class="text-center m-0">
        Nadie ha comentado todavía esta película, sé tu el primero!
      </p>
    </div>
  </div>
</template>

<script>
import MovieDetailedCard from '@/components/movies/movie-card/MovieDetailedCard'
import Tabs from '@/components/movies/detailed-movie-page/Tabs'
import AsideDetailedMovie from '@/components/movies/detailed-movie-page/AsideDetailedMovie'
import CommentsMovie from '@/components/movies/detailed-movie-page/CommentsMovie'

export default {
  name: 'DetailedMoviePage',
  components: { CommentsMovie, AsideDetailedMovie, Tabs, MovieDetailedCard },

  data () {
    return {
      movieID: this.$route.params.movie,
      movie: [],
      comments: [],
      date: '',
      directors: 'Directores : ',
      writters: 'Escritores : ',
      actors: 'Actores : ',
      contentComment: true
    }
  },

  async beforeMount () {
    this.fetchMovie()
  },

  methods: {
    async fetchMovie () {
      const promiseMovie = await fetch(
        `http://filmfy-api.ddns.net/api/movies/${this.movieID}`
      )
      const moviesData = await promiseMovie.json()
      this.movie = moviesData
      this.date = new Date(moviesData.release_date)
      await this.fetchComments()
    },

    async fetchComments () {
      const promise = await fetch(
        `http://filmfy-api.ddns.net/api/comments-movie/${this.movieID}`
      )
      const commentsData = await promise.json()
      this.comments = commentsData
      await this.checkData()
    },

    async checkData () {
      if (this.comments.length === 0) {
        this.contentComment = false
      } else {
        this.contentComment = true
      }
    }
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
  letter-spacing: 0.065em;
  margin-bottom: 3rem;
}

.description {
  color: #c9c9c9;
  line-height: 25px;
}

.section-heading {
  display: flex;
  border-bottom: 1px solid white;
  color: white;
  font-family: Graphik-Regular-Web, sans-serif;
  font-size: 1rem;
  font-weight: 400;
  letter-spacing: 0.065em;
  margin-bottom: 0.76923077rem;
  margin-top: 0;
  padding-bottom: 5px;
  text-transform: uppercase;
}

.general {
  background-color: black;
  padding-top: 4rem;
}

.video {
  width: 75vw;
  height: 40vw;
}

@media (max-width: 650px) {
  .video {
    width: 100%;
    height: 50vw;
  }
}
</style>
