<template>
  <div class="container-fluid">
    <!--NavBar-->
    <div id="navmenu">
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
          <!--Filmfy Icon-->
          <div id="filmfyIcon">
            <router-link to="/">  <img
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
                <router-link class="nav-link" to="#">Home</router-link>
              </li>
              <li class="nav-item">
                <a v-if="log" class="nav-link " href="#">Mi Espacio</a>
                <a v-else class="nav-link disabled" href="#">Mi Espacio</a>
              </li>
              <li class="nav-item">
                <router-link class="nav-link" to="'/forum'">Forum</router-link>
              </li>
              <li class="nav-item">
                <router-link class="nav-link" to="/news">News</router-link>
              </li>
              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Contenido
                </a>
                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <router-link class="nav-link" to="/movies"
                      >Películas</router-link
                    >
                  </li>
                  <li>
                    <router-link class="nav-link" to="/series"
                      >Series</router-link
                    >
                  </li>
                  <li>
                    <router-link class="nav-link" to="/documentaries"
                      >Documentales</router-link
                    >
                  </li>
                  
                </ul>
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
              <button class="btn btn-outline-success" type="submit">
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
  name: "Navbar",

  data() {
    return {
      log: true,
    };
  },
};
</script>

<style scoped>
li{
  font-size: 2.5vh;
}
div#searching {
  display: flex;
}
img#logoFilmfy{
  width: 10vh;
  height: 10vh;
}
</style>