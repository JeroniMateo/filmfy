<template>
  <section class="container d-flex justify-content-md-between">
    <div class="filters d-flex align-items-center bar-nav">
      <div class="dropdown">
        <label class="button-filter dropdown-toggle" type="" id="dropdownMenuButton2" data-bs-toggle="dropdown">
          Category
        </label>
        <ul id="categoriesFilter" class="dropdown-menu dropdown-menu-dark" aria-labelledby="dropdownMenuButton2">

        </ul>
      </div>
      <div class="dropdown">
        <label class="button-filter dropdown-toggle" type="" id="dropdownMenuButton2" data-bs-toggle="dropdown">
          Year
        </label>
        <ul class="dropdown-menu dropdown-menu-dark" aria-labelledby="dropdownMenuButton2">
          <li><a class="dropdown-item active" href="#">Action</a></li>
          <li><a class="dropdown-item" href="#">Another action</a></li>
          <li><a class="dropdown-item" href="#">Something else here</a></li>
          <li>
            <hr class="dropdown-divider">
          </li>
          <li><a class="dropdown-item" href="#">Separated link</a></li>
        </ul>
      </div>
    </div>


    <div class="searcher">

    </div>
  </section>
</template>

<script>
export default {
  name: "FilterBrowser",

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
      const categoryPromise = await fetch("http://127.0.0.1:8000/api/categories")
      const categoriesData = await categoryPromise.json()
      this.categories = categoriesData
      this.printCategories()
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

.button-filter {
  padding: 10px;
  margin: 0;
}

.bar-nav {
  background: transparent;
  border: 1px solid white;
  border-radius: 4px;
  color: white;
  display: inline-block;
  padding: 0 2px;
  white-space: nowrap;
}

.bar-nav > div {
  border-right: 1px solid white;
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

</style>