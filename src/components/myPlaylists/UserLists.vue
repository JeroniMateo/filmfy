<template>
  <div class="UserList container-fluid"> 
      <div class="col UserList">
        <div class="card h-100" @click="goIntoList">
          <img class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title" id="title_list">Mattius</h5>
            <p class="card-text" id="description_list">
              Playlist with all the movies you have watched
            </p>
          </div>
          <div class="card-footer">
            <small class="text-muted" id="user_list">by Mattius</small>
          </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'UserList',
  data:{
    userList: [],
    img_list: '',
    title_list: '',
    description_list: '',
    user_list: '',
  },
  props: {
    playlist: {
      type: Object,
      required: true
    }
  },
  methods: {
    goIntoList() {
      this.$router.push('/moviesList/')
    }
  },
}
</script>

<style>
#UserList {
  background-color: rgb(15, 23, 30);
  color: #fff;
  font-family: Arial;
  font-size: 2vh;
  display: flex;
  width: 20vh;
  height: 30vh;
}
</style>
