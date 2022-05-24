<template>
  <div class="UserLists container-fluid">
    <div class="col UserList">
      <div class="card h-100" @click="goIntoList">
        <img class="card-img-top" alt="..." />
        <div class="card-body">
          <h5 class="card-title" id="title_list">{{ title_list }}</h5>
          <p class="card-text" id="description_list">
            {{ description_list }}
          </p>
        </div>
        <div class="card-footer">
          <small class="text-muted" id="user_list">by {{ user_list }} </small>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'UserLists',
  data () {
    return {
      movie: '',
      movies: [],
      user_lists: [],
      img_list: '',
      title_list: '',
      description_list: ''
    }
  },
  props: {
    playlist: {
      type: Object,
      required: true
    }
  },
  methods: {
    goIntoList () {
      this.$router.push('/moviesList/')
    }
  }
}
</script>

<style>
#UserList {
  background-color: #0f0505;
  color: #f7f7f5;
  font-family: Arial;
  font-size: 2vh;
  display: flex;
  width: 20vh;
  height: 30vh;
}
</style>
