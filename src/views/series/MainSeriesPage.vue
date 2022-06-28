<template>
  <div class="all">
    <div class="image">
      <div class="container text-movie d-flex justify-content-end flex-column">
        <span><strong>Encuentra las mejores series</strong></span>
      </div>
    </div>

    <div class="container searcher">
      <div class="row flex-column flex-lg-row align-items-center">
        <Filter
          class="col-12 col-lg-6 my-2 justify-content-center justify-content-lg-start"
        />
        <Searcher
          class="col-12 col-lg-6 my-2 justify-content-center justify-content-lg-end"
        />
      </div>
    </div>
    <RecentSeries />
    <BestSeries />
    <UpcommingSeries />
    <SeriesMoreLists />
  </div>
</template>

<script>
import RecentSeries from '@/components/series/series-page/RecentSeries'
import BestSeries from '@/components/series/series-page/BestSeries'
import Filter from '@/components/series/detailed-serie-page/Filter'
import Searcher from '@/components/series/series-page/Searcher'
import SeriesMoreLists from '@/components/series/series-page/SeriesMoreLists'
import UpcommingSeries from '@/components/series/series-page/UpcommingSeries'

export default {
  name: 'MainMoviesPage',
  components: {
    UpcommingSeries,
    SeriesMoreLists,
    Searcher,
    Filter,
    BestSeries,
    RecentSeries
  }
}
</script>

<style scoped>
.searcher {
  margin-bottom: 150px;
}

.text-movie {
  height: 65vh;
}

.image {
  background-image: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0),
      rgba(0, 0, 0, 100)
    ),
    url('../../assets/img/MoviesIMG/batman.jpg');
  box-sizing: border-box;
  background-size: cover;
  background-position: 50% 40%;
  width: 100%;
  height: 75vh;
}

@media only screen and (max-width: 767px) {
  .image {
    height: 68vh;
  }

  .searcher {
    margin-bottom: 80px;
  }
}

.all {
  background-color: black;
}

span {
  font-size: 1.5rem;
}
</style>
