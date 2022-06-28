<template>
  <div class="general">
    <div class="container">
      <h2 class="title">{{ this.movie.title }} {{ this.date }}</h2>
    </div>

    <div
      class="container d-flex justify-content-between align-items-center flex-column"
    >
      <div class="row big-width">
        <DocumentaryDetailedCard
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
          <AsideDetailedDocumentary :movie="this.movie" />
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
      <CommentsDocumentary
        v-for="comment of this.comments"
        :key="comment"
        :comment="comment"
        :user="user"
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
import DocumentaryDetailedCard from '@/components/documentaries/documentary-card/DocumentaryDetailedCard'
import Tabs from '@/components/movies/detailed-movie-page/Tabs'
import { getCookie, getUser } from '@/main'
import AsideDetailedDocumentary from '@/components/documentaries/detailed-documentaries-page/AsideDetailedDocumentary.vue'
import CommentsDocumentary from '@/components/documentaries/detailed-documentaries-page/CommentsDocumentary.vue'

export default {
  name: 'DetailedMoviePage',
  components: {
    Tabs,
    DocumentaryDetailedCard,
    AsideDetailedDocumentary,
    CommentsDocumentary
  },

  data() {
    return {
      movieID: this.$route.params.movie,
      movie: [],
      comments: [],
      date: '',
      directors: 'Directores : ',
      writters: 'Escritores : ',
      actors: 'Actores : ',
      contentComment: true,
      user: '',
      token: ''
    }
  },

  async beforeMount() {
    await this.fetchMovie()
    this.token = await getCookie('auth')
    this.user = await getUser(this.token)
  },

  methods: {
    async fetchMovie() {
      const promiseMovie = await fetch(
        `http://filmfy-api.ddns.net/api/movies/${this.movieID}`
      )
      const moviesData = await promiseMovie.json()
      this.movie = moviesData
      this.date = '(' + new Date(moviesData.release_date).getFullYear() + ')'
      await this.fetchComments()
    },

    async fetchComments() {
      const promise = await fetch(
        `http://filmfy-api.ddns.net/api/comments-movie/${this.movieID}`
      )
      const commentsData = await promise.json()
      this.comments = commentsData
      await this.checkData()
    },

    async checkData() {
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
  .general {
    padding-top: 2rem;
  }
}
</style>
