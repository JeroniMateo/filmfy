<template>
  <aside class="aside-card d-flex flex-column align-items-start rounded-3 p-0">
    <div @click="sendLike" class="m-auto p-2" style="cursor: pointer">
      <div class="">
        <span class="mx-3">Me gusta</span>
        <i class="fa-solid fa-heart me-2 heart"></i>
      </div>
    </div>
    <div class="text-center p-1 share-buttons">
      <a
        :href="'https://www.facebook.com/sharer.php?u=' + currentUrl"
        target="_blank"
        ><i class="text-primary mx-2 fa-brands fa-facebook-square p-1"></i
      ></a>
      <a
        :href="'https://twitter.com/share?ref_src=' + currentUrl"
        class="twitter-share-button"
        target="_blank"
        ><i class="text-primary mx-2 fa-brands fa-twitter p-1"></i
      ></a>
      <a
        :href="
          'https://api.whatsapp.com/send?text=' +
          '¡Mira esta lista de películas que he visto en FilmFy!' +
          currentUrl
        "
        data-action="share/whatsapp/share"
        target="_blank"
        ><i class="text-primary mx-2 fa-brands fa-whatsapp p-1"></i
      ></a>
      <a
        :href="
          'https://telegram.me/share/url?url=' +
          currentUrl +
          '&text=¡Comparte esta lista en telegram!'
        "
        target="_blank"
        ><i class="text-primary mx-2 fa-brands fa-telegram p-1"></i
      ></a>
      <a href="mailto:" target="_blank"
        ><i class="text-primary mx-2 fa-solid fa-envelope p-1"></i
      ></a>
    </div>
  </aside>
</template>

<script>
export default {
  props: ['list'],
  name: 'AsideDetailedMovie',
  components: {},
  data() {
    return {
      currentUrl: ''
    }
  },
  created: function () {
    this.currentUrl = window.location.href
  },
  methods: {
    async sendLike() {
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

    displayModalForm() {
      let formModal = document.getElementById('modal')
      formModal.style.display = 'block'
    }
  }
}
</script>

<style scoped>
.aside-card {
  background-color: #242424;
  width: fit-content;
}

span {
  color: #445566;
}

span:hover {
  cursor: pointer;
  color: #fffdfd;
}

aside > div {
  width: -webkit-fill-available;
  border-bottom: 1px solid #445566;
}

aside > div:last-child {
  border-bottom: none;
}

.heart {
  color: #fffdfd;
  font-size: 1.5rem;
}

.heart:hover {
  color: #f1c40f;
}

.share-buttons > a {
  font-size: 2rem;
}
</style>
