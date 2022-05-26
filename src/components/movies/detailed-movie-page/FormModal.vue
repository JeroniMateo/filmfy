<template>
  <div id="form-sended" class="subscription">
    <div class="form-sended-content">

      <div class="row">
        <div class="col-4">
          <img v-bind:src="'http://filmfy-api.ddns.net/' + this.movie.image" alt="" width="200">
        </div>
        <div class="col-7">
          <form>
            <div class="mb-3">
              <label for="" class="form-label">Título</label>
              <input id="title" name="title" type="text" class="form-control title" value="" required>
            </div>
            <div class="mb-3">
              <label for="" class="form-label">Cuerpo de la critica</label>
              <textarea id="body" name="body" class="form-control body"></textarea>
            </div>
            <div class="mb-3">
              <label for="" class="form-label">Puntuación</label>
              <input id="rating" type="text" name="rating" class="form-control rating">
            </div>
<!--            TODO: Change when login-->
            <input type="hidden" name="users_id" value="2">
            <input type="button" @click="postComment" value="Enviar">
          </form>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  name: "FormModal",
  props:["movie"],

  methods: {
    async postComment(){
      await fetch(`http://127.0.0.1:8000/api/comments-store/${this.movie.id}`, {
        method: "POST",
        headers: {
          "Content-type": "application/json; charset=UTF-8"
        },
        body: JSON.stringify({
          "title" : document.getElementById("title").value,
          "body" : document.getElementById("body").value,
          "rating" : document.getElementById("rating").value,
          "users_id": "2"
        })
      })
      await location.reload()
    }
  }
}
</script>

<style scoped>
.form-sended-content{
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 60vw;
  height: auto;
  background-color: #2C3440;
  margin: 50px auto;
  padding: 20px;
  border: 1px solid #888;
  text-align: center;
}

.subscription {
  display: none;
  align-items: center;
  position: fixed;
  z-index: 1; /* Sit on top */
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto; /* Enable scroll if needed */
  backdrop-filter: blur(6px); /* blur effect for the overlay! */
}

.body {
  height: 400px;
  background-color: rgb(204,221,238);
}

.title {
  background-color: rgb(204,221,238);
}
</style>