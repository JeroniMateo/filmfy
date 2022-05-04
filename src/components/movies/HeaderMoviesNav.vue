<template>
  <div class="container">
    <ul class="nav nav-pills nav-fill">
      <li class="nav-item">
        <router-link class="nav-link active" aria-current="page" to="/vmovies"
          >Peliculas</router-link
        >
      </li>
      <li class="nav-item">
        <router-link class="nav-link" aria-current="page" to="#"
          >Cartelera</router-link
        >
      </li>
      <li class="nav-item">
        <router-link class="nav-link" aria-current="page"
          >Destacados</router-link
        >
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "HeaderMoviesNav",
};
</script>

<style>
</style>