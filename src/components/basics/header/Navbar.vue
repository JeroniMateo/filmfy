<template>
  <div class="container-fluid">
    <!--NavBar-->
    <div id="navmenu">
      <nav class="navbar navbar-expand-lg">
        <div class="container-fluid">
          <!--Filmfy Icon-->
          <div id="filmfyIcon">
            <router-link to="/">
              <img
                src="../../../assets/img/LogoImageFilmfy.png"
                alt=""
                id="logoFilmfy"
            /></router-link>
          </div>

          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <router-link class="nav-link" to="/home">Home</router-link>
              </li>
              <li class="nav-item">
                <router-link class="nav-link" to="/movies"
                  >Peliculas</router-link
                >
              </li>
              <li class="nav-item">
                <router-link class="nav-link" to="/trailers"
                  >Trailers</router-link
                >
              </li>
              <li class="nav-item">
                <router-link class="nav-link" to="/outstandings"
                  >Destacados</router-link
                >
              </li>
              <li class="nav-item">
                <router-link class="nav-link" to="/billboard"
                  >Cartelera</router-link
                >
              </li>

              <li class="nav-item">
                <!--This Navbar link will be enabled if the user is loged-->
                <router-link v-if="log" class="nav-link" to="/playlists"
                  >Mis Listas</router-link
                >
                <router-link v-else class="nav-link disabled" to="/playlists"
                  >Mis Listas</router-link
                >
              </li>
            </ul>
            <div id="searching">
              <input
                class="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <!--Search-->
              <button class="btn-success" type="submit">
                Buscar
              </button>
            </div>
          </div>
        </div>
      </nav>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Navbar',

  data() {
    return {
      log: true
    }
  }
}
</script>

<style scoped>
.nav-link {
  color: rgb(78, 159, 61);
}
li {
  font-size: 2.5vh;
}
div#searching {
  display: flex;
}
img#logoFilmfy {
  width: 10vh;
  height: 10vh;
}
</style>
