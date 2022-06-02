<template>
  <div class="d-flex align-items-center col-6">
    <span class="text-filter">Filtrar por :</span>
    <div class="filters d-flex align-items-center bar-nav">
      <div class="dropdown">
        <label
          class="button-filter dropdown-toggle"
          type=""
          data-bs-toggle="dropdown"
        >
          Category
        </label>
        <ul
          id="categoriesFilter"
          class="dropdown-menu dropdown-menu-dark"
          aria-labelledby="dropdownMenuButton2"
        ></ul>
      </div>
      <div class="dropdown yes">
        <label
          class="button-filter dropdown-toggle"
          type=""
          data-bs-toggle="dropdown"
        >
          Year
        </label>
        <ul
          id="yearsFilter"
          class="dropdown-menu dropdown-menu-dark"
          aria-labelledby="dropdownMenuButton2"
        ></ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Filter',
  components: {},
  data () {
    return {
      categories: [],
      baseUrl: window.origin
    }
  },

  beforeMount () {
    this.fetchCategories()
  },

  methods: {
    async fetchCategories () {
      const categoryPromise = await fetch(
        'http://filmfy-api.ddns.net/api/categories'
      )
      const categoriesData = await categoryPromise.json()
      this.categories = categoriesData
      this.printCategories()
      this.printYears()
    },

    printCategories () {
      const categoriesFilter = document.getElementById('categoriesFilter')
      this.categories.forEach((el) => {
        const slugEl = this.string_to_slug(el.name)

        categoriesFilter.innerHTML += `
          <li><a style="font-size: 12px" class="dropdown-item" href="${this.baseUrl}/movies/category/${slugEl}">${el.name}</a></li>
        `
      })
    },

    printYears () {
      const yearsFilter = document.getElementById('yearsFilter')
      const baseYear = 1950
      const getCurrentYear = new Date().getFullYear()

      for (let i = baseYear; i < getCurrentYear; i = i + 10) {
        yearsFilter.innerHTML += `
          <li><a style="font-size: 12px; text-transform: capitalize" class="dropdown-item" href="${this.baseUrl}/movies/years/${i}">${i}s</a></li>
        `
      }
    },

    string_to_slug (str) {
      str = str.replace(/^\s+|\s+$/g, '') // trim
      str = str.toLowerCase()

      // remove accents, swap ñ for n, etc
      const from = 'àáäâèéëêìíïîòóöôùúüûñç·/_,:;'
      const to = 'aaaaeeeeiiiioooouuuunc------'
      for (let i = 0, l = from.length; i < l; i++) {
        str = str.replace(new RegExp(from.charAt(i), 'g'), to.charAt(i))
      }

      str = str
        .replace(/[^a-z0-9 -]/g, '') // remove invalid chars
        .replace(/\s+/g, '-') // collapse whitespace and replace by -
        .replace(/-+/g, '-') // collapse dashes

      return str
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

@media (max-width: 600px) {
  span {
    display: none;
  }
}

span:last-child {
  width: fit-content;
}

.button-filter {
  padding: 10px;
  margin: 0;
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
  font-size: 0.92307692rem;
  letter-spacing: 0.075em;
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
  top: auto;
  bottom: 100%;
}
</style>
