<template>
  <aside class="aside-card d-flex flex-column align-items-start rounded-3 p-0">
    <div @click="sendLike" class="m-auto p-3" style="cursor: pointer">
      <i class="fa-solid fa-heart me-2 heart"></i>
    </div>
    <div class="text-center p-3 share-buttons">
      <a><i class="fa-brands fa-facebook-square p-1"></i></a>
      <a><i class="fa-brands fa-twitter p-1"></i></a>
      <a><i class="fa-brands fa-whatsapp p-1"></i></a>
      <a><i class="fa-brands fa-telegram p-1"></i></a>
      <a><i class="fa-solid fa-envelope p-1"></i></a>
    </div>
  </aside>
</template>

<script>
export default {
  props: ['list'],
  name: 'AsideDetailedMovie',
  components: {},
  methods: {
    async sendLike () {
      await fetch('http://filmfy-api.ddns.net/api/lists-likes', {
        method: 'POST',
        headers: {
          'Content-type': 'application/json',
          'Access-Control-Allow-Origin': '*'
        },
        body: JSON.stringify({
          movies_id: this.$route.params.movie,
          users_id: '2'
        })
      })

      await location.reload()
    },

    displayModalForm () {
      const formModal = document.getElementById('modal')
      formModal.style.display = 'block'
    }
  }
}
</script>

<style scoped>
.aside-card {
  background-color: #2c3440;
  width: fit-content;
}

span {
  color: #bcd;
}

span:hover {
  cursor: pointer;
  color: white;
}

aside > div {
  width: -webkit-fill-available;
  border-bottom: 1px solid #445566;
}

aside > div:last-child {
  border-bottom: none;
}

.heart {
  color: white;
  font-size: 30px;
}

.heart:hover {
  color: orange;
}

.share-buttons > a {
  font-size: 2rem;
}
</style>
