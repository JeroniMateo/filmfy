<template>

  <div class="">
    <div class="">
      <div class="panel">
        <p id="directors"><span>Dirección : </span></p>
      </div>
      <div class="panel">
        <p id="writters"><span>Guión : </span></p>
      </div>
      <div class="panel">
        <p id="actors"><span>Reparto : </span></p>
      </div>
      <div class="panel">
        <p id="runtime"><span>Duracion :  </span>{{this.movie.runtime}} minutos</p>
      </div>
      <div class="panel">
        <p id="release_date"><span>Fecha de lanzamiento : </span></p>
      </div>
      <div class="p-3 d-flex align-items-center" id="categories">

      </div>
    </div>

  </div>
</template>

<script>

export default {
  name: "Tabs",

  props: ["movie"],

  async mounted() {
    await this.infoOutput()
  },

  methods: {
    infoOutput() {

      let directors = document.getElementById("directors")
      this.movie.directors.forEach((director, index) => {
        if (this.movie.directors.length === 1) {
          directors.innerHTML += director
        } else {
          if ((index + 1) !== this.movie.directors.length) {
            directors.innerHTML += director + " · "
          } else {
            directors.innerHTML += director + ""
          }
        }
      })

      let writters = document.getElementById("writters")
      this.movie.writters.forEach((writter, index) => {
        if (this.movie.writters.length === 1) {
          writters.innerHTML += writter
        } else {
          if ((index + 1) !== this.movie.writters.length) {
            writters.innerHTML += writter + " · "
          } else {
            writters.innerHTML += writter + ""
          }
        }
      })

      let actors = document.getElementById("actors")
      this.movie.actors.forEach((actor, index) => {
        if (this.movie.actors.length === 1) {
          actors.innerHTML += actor
        } else {
          if ((index + 1) !== this.movie.actors.length) {
            actors.innerHTML += actor + " · "
          } else {
            actors.innerHTML += actor
          }
        }
      })

      let categories = document.getElementById("categories")
      this.movie.categories.forEach((category, index) => {
          categories.innerHTML += `<p style="border: 1px solid white; border-radius: 20px; padding: 4px 12px 4px 12px; margin-bottom: 0px; margin-right: 10px">${category}</p>`

      })

      let date = new Date(this.movie.release_date)

      function toMonthName(monthNumber) {
        const date = new Date();
        date.setMonth(monthNumber);

        return date.toLocaleString('es-ES', {
          month: 'long',
        });
      }

      let release_date = document.getElementById("release_date").innerHTML += `${toMonthName(date.getMonth())} de ${date.getFullYear()} `

    }
  }
}
</script>

<style scoped>

p {
  margin: 0;
  padding: 20px;
  text-align: left;
}

.category {
  padding: 5px;
  border-radius: 10px;
  border: 1px solid white;
}

.panel {
  border-bottom: 1px solid #456;
}

.panel:last-child {
  border-bottom: none;
}

span {
  color: #00c740;
}


</style>