<template>
  <div class="all">
    <div class="container">
      <div class="section-heading mt-5 align-items-center align-items-lg-start flex-column">
        <span class="text-center">Nueva lista</span>
      </div>
    </div>
    <div>
      <form action="">

        <div class="container">
          <div class="row">
            <div class="mb-3">
              <label for="" class="form-label">Título</label>
              <input id="title" name="title" type="text" class="form-control title" value="" required>
            </div>
          </div>
        </div>

      </form>
    </div>
    <div class="container">
      <SearchMoviesForList/>
    </div>
  </div>


</template>

<script>
import SearchMoviesForList from "@/components/lists/SearchMoviesForList";

export default {
  name: "FormNewList",
  components: {SearchMoviesForList}
}
</script>

<style scoped>

.all {
  padding: 1px;
  background-color: black;
}

.section-heading {
  display: flex;
  border-bottom: 1px solid white;
  color: white;
  font-family: Graphik-Regular-Web, sans-serif;
  font-size: 2rem;
  font-weight: 400;
  letter-spacing: .075em;
  margin-bottom: 0.76923077rem;
  margin-top: 0;
  padding-bottom: 5px;
  text-transform: uppercase;
}

.section-heading a {
  color: #9ab;
}
</style>