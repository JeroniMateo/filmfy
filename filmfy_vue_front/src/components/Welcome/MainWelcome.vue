<template>
  <div class="container-fluid">
    <div class="card bg-dark text-white">
      <img
        class="card-img"
        alt="..."
      />
      <div class="card-img-overlay">
        <h5 class="card-title">Filmfy</h5>
        <p class="card-text">
          Encuentra variedad de conentido <br />
              y crea listas para compartirlas con tus amigos
        </p>
        <p class="card-text">Disfruta de contenido exclusivo</p>
          <label class="d-flex">Que vemos Hoy?
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
        <button class="btn btn-outline-success" type="submit">Search</button>
          </label>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MainWelcome",
};
</script>

<style>
</style>