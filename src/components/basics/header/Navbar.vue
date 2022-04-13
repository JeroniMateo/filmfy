<template>
  <div class="container-fluid">
    <!--NavBar-->
    <div id="navmenu">
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
          <!--Filmfy Icon-->
          <div id="filmfyIcon">
            <router-link to="../../../views/Welcome.vue">Filmfy</router-link>
            <img
              src="../../../assets/img/LogoFilmfy.png"
              width="200px"
              height="200px"
              alt=""
            />
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
                <router-link
                  class="nav-link"
                  to="../../../views/main-pages/Home.vue"
                  >Home</router-link
                >
              </li>
              <li class="nav-item">
                <a class="nav-link disabled" href="#">Mi Espacio</a>
              </li>
              <li class="nav-item">
                <router-link
                  class="nav-link"
                  to="../../../views/main-pages/Forum"
                  >Forum</router-link
                >
              </li>
              <li class="nav-item">
                <router-link
                  class="nav-link"
                  to="../../../views/main-pages/News.vue"
                  >News</router-link
                >
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
                    <router-link
                      class="nav-link"
                      to="../../../views/watchContent/Movies.vue"
                      >Películas</router-link
                    >
                  </li>
                  <li>
                    <router-link
                      class="nav-link"  
                      to="../../../views/watchContent/Series.vue"
                      >Series</router-link
                    >
                  </li>
                  <li>
                    <router-link
                      class="nav-link"
                      to="../../../views/watchContent/Documentaries.vue"
                      >Documentales</router-link
                    >
                  </li>
                  <li><hr class="dropdown-divider" /></li>
                  <li>
                    <a class="dropdown-item" href="">Otros</a>
                  </li>
                </ul>
              </li>
              <li class="nav-item">
                <!--This Navbar link will be enabled if the user is loged-->
                <a class="nav-link disabled">Mis Listas</a>
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
};
</script>

<style>
div#searching {
  display: flex;
}
</style>