<template>
  <div class="warpper">
    <input class="radio" id="one" name="group" type="radio" checked>
    <input class="radio" id="two" name="group" type="radio">
    <input class="radio" id="three" name="group" type="radio">
    <div class="tabs">
      <label class="tab" id="one-tab" for="one">Directores</label>
      <label class="tab" id="two-tab" for="two">Escritores</label>
      <label class="tab" id="three-tab" for="three">Actores</label>
    </div>
    <div class="panels">
      <div class="panel" id="one-panel">
        <p id="directors"></p>
      </div>
      <div class="panel" id="two-panel">
        <p id="writters"></p>
      </div>
      <div class="panel" id="three-panel">
        <p id="actors"></p>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: "Tabs",

  props : ["movie"],

  mounted() {
    this.infoOutput()
  },

  methods : {
    async infoOutput() {

      let directors = document.getElementById("directors")
      this.movie.directors.forEach((director, index) => {
        if (this.movie.directors.length === 1) {
          directors.innerHTML = director
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
          writters.innerHTML = writter
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
          actors.innerHTML = actor
        } else {
          if ((index + 1) !== this.movie.actors.length) {
            actors.innerHTML += actor + " · "
          } else {
            actors.innerHTML +=  actor
          }
        }
      })

    }
  }
}
</script>

<style scoped>
.warpper {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.tabs {
  border-bottom: 2px solid green;
}

.tab {
  cursor: pointer;
  padding: 10px 20px;
  display: inline-block;
  color: #fff;
}

.panels[data-v-72140086] {
  width: 100%;
  max-width: 500px;
  border-radius: 3px;
  overflow: hidden;
  padding: 20px;
}

.panel {
  display: none;
  animation: fadein .8s;
  padding: 15px;
}

@keyframes fadein {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

.radio {
  display: none;
}

#one:checked ~ .panels #one-panel,
#two:checked ~ .panels #two-panel,
#three:checked ~ .panels #three-panel {
  display: block
}

#one:checked ~ .tabs #one-tab,
#two:checked ~ .tabs #two-tab,
#three:checked ~ .tabs #three-tab {
  background: green;

}

.contentData {
  width: inherit;
}
</style>