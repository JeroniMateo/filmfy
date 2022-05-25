<template>

  <section class="container d-flex justify-content-md-between my-3">

    <div class="d-flex align-items-center ">
      <span>Filtrar por :</span>
      <div class="filters d-flex align-items-center bar-nav">
        <div class="dropdown">
          <label class="button-filter dropdown-toggle" type="" id="dropdownMenuButton2" data-bs-toggle="dropdown">
            Category
          </label>
          <ul id="categoriesFilter" class="dropdown-menu dropdown-menu-dark" aria-labelledby="dropdownMenuButton2">

          </ul>
        </div>
        <div class="dropdown yes">
          <label class="button-filter dropdown-toggle" type="" id="dropdownMenuButton2" data-bs-toggle="dropdown">
            Year
          </label>
          <ul id="yearsFilter" class="dropdown-menu dropdown-menu-dark" aria-labelledby="dropdownMenuButton2">

          </ul>
        </div>
      </div>
    </div>

    <Searcher/>
  </section>
</template>

<script>
import Searcher from "@/components/movies/movies-page/Searcher";
export default {
  name: "FilterBrowser",
  components: {Searcher},
  data() {
    return {
      categories: [],
    }
  },

  beforeMount() {
    this.fetchCategories()
  },

  methods: {
    async fetchCategories() {
      const categoryPromise = await fetch("http://filmfy-api.ddns.net/api/categories")
      const categoriesData = await categoryPromise.json()
      this.categories = categoriesData
      this.printCategories()
      this.printYears()
    },

    printCategories() {
      let categoriesFilter = document.getElementById("categoriesFilter")
      this.categories.forEach(el => {
        let slugEl = this.string_to_slug(el.name)

        categoriesFilter.innerHTML += `
          <li><a style="font-size: 12px" class="dropdown-item" href="/movies/category/${slugEl}">${el.name}</a></li>
        `
      })
    },

    printYears() {
      let yearsFilter = document.getElementById("yearsFilter")
      let baseYear = 1950
      let getCurrentYear = new Date().getFullYear()

      for (let i = baseYear; i < getCurrentYear; i = i+10) {
        yearsFilter.innerHTML += `
          <li><a style="font-size: 12px; text-transform: capitalize" class="dropdown-item" href="/movies/years/${i}">${i}s</a></li>
        `
      }

    },

    string_to_slug(str) {
      str = str.replace(/^\s+|\s+$/g, ''); // trim
      str = str.toLowerCase();

      // remove accents, swap ñ for n, etc
      var from = "àáäâèéëêìíïîòóöôùúüûñç·/_,:;";
      var to = "aaaaeeeeiiiioooouuuunc------";
      for (var i = 0, l = from.length; i < l; i++) {
        str = str.replace(new RegExp(from.charAt(i), 'g'), to.charAt(i));
      }

      str = str.replace(/[^a-z0-9 -]/g, '') // remove invalid chars
          .replace(/\s+/g, '-') // collapse whitespace and replace by -
          .replace(/-+/g, '-'); // collapse dashes

      return str;
    }
  }
}
</script>

<style scoped>

span {
  font-size: 1rem;
  margin-right: 10px;
  text-transform: uppercase;
}

span:last-child {
  width: fit-content;
}

.button-filter {
  padding: 10px;
  margin: 0;
}

.field {
  background-color: #2c3440;
  border: 1px solid #303840;
  border-radius: 3px;
  box-shadow: inset 0 -1px 0 #456;
  box-sizing: border-box;
  color: white;
  font-size: 1.07692308rem;
  line-height: 1;
  margin: 0;
  padding: 9px 9px 8px;
  width: 100%;
}

.searcher{
  display: flex;
  align-items: center;
}

.bar-nav {
  background: #1b2127;
  border: 1px solid #303840;
  border-radius: 4px;
  display: inline-block;
  padding: 0 2px;
  white-space: nowrap;
}

.bar-nav > div {
  float: left;
  font-size: .92307692rem;
  letter-spacing: .075em;
  line-height: 1;
  text-transform: uppercase;
}

.bar-nav :last-child {
  border-right: 0;
}


label {
  cursor: pointer;
}

.yes {
  top: auto; bottom: 100%
}

</style>