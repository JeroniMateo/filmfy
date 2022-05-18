<template>
  <div id="WatchItemConfig">
    <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
      <li id="favMovie" v-if="favs">
        <button @click="addFavs">Add Favs</button>
      </li>
      <li id="notFavMovie" v-else>
        <a class="dropdown-item" href="#"
          ><button @click="removeFavs">Remove Favs</button></a
        >
      </li>
      <li><hr class="dropdown-divider" /></li>
      <li id="watchMovie" v-if="watch">
        <button @click="addWatched">Watched</button>
      </li>
      <li id="notWatchMovie" v-else>
        <button @click="removeWatched">Unwatched</button>
      </li>
      <li class="nav-item dropdown">
        <a
          @click="addToList"
          class="nav-link dropdown-toggle"
          href="#"
          id="addToList"
          role="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          Añadir a Playlist
        </a>
        <ul
          class="dropdown-menu"
          aria-labelledby="navbarDropdown"
          id="navbar_lists"
        >
          <li v-for="list in lists" :list="list" :key="list.name">
            {{ list.name }}
          </li>
        </ul>
      </li>
      <li><button class="share" @click="getlink">Share</button></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'WatchItemConfig',

  data () {
    return {
      favs: false,
      watch: false,
      movie: '',
      movies: [],
      favs_list: [],
      watch_list: [],
      user_lists: [],
      user_list: [],
      list: []
    }
  },
  methods: {
    addFavs () {
      this.favs = true
      this.favsList.push(this.movie)
    },
    removeFavs () {
      this.favs = false
      this.favsList.pop(this.movie)
    },
    addWatched () {
      this.watch = true
      this.watchList.push(this.movie)
    },
    removeWatched () {
      this.watch = false
      this.watchList.pop(this.movie)
    },
    addToList () {
      this.user_list = this.user_lists.filter(
        (list) => list.name === this.user_list_name
      )
      this.user_list[0].movies.push(this.movie)
      this.user_list[0].movies.push(this.movie)
    },
    getlink () {
      const aux = document.createElement('input')
      aux.setAttribute('value', window.location.href)
      document.body.appendChild(aux)
      aux.select()
      document.execCommand('copy')
      document.body.removeChild(aux)

      // Aqui se puede añadir una alerta de que se ha copiado el link
      const css = document.createElement('style')
      const estilo = document.createTextNode(
        '#aviso {position:fixed; z-index: 9999999; widht: 120px; top:30%;left:50%;margin-left: -60px;padding: 20px; background: gold;border-radius: 8px;font-size: 14px;font-family: sans-serif;}'
      )
      css.appendChild(estilo)
      document.head.appendChild(css)
      const aviso = document.createElement('div')
      aviso.setAttribute('id', 'aviso')
      const contenido = document.createTextNode('URL copiada')
      aviso.appendChild(contenido)
      document.body.appendChild(aviso)
      window.load = setTimeout('document.body.removeChild(aviso)', 2000)
    }
  }
}
</script>

<style scoped>
.share {
  display: block;
  width: 120px;
  margin: 0 auto;
  padding: 10px;
  color: #ffffff;
  background: #990000;
  text-align: center;
}
</style>
