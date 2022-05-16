<template>
  <div class="WatchList container p-4">
      <div class="row row-cols-1 row-cols-md-3 g-4">
        <div class="col">
          <div class="card h-100 w-50">
            <img class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">Watched Movies</h5>
              <p class="card-text">Playlist with all the movies you have watched</p>
            </div>
            <div class="card-footer">
              <small class="text-muted">by Filmfy</small>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  name: "WatchList",
  props: {
    playlist: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style >
</style>