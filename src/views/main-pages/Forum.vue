<template>
  <div class="container">
    <div class="DiscussArea">
    <div id="AddDiscussion">
      <button @click="addDiscuss">New Discuss</button>
    </div>
    <NewDiscuss/>
    </div>
  </div>
</template>

<script>
import NewDiscuss from "@/components/principal-views/Forum/NewDiscuss.vue"

export default {
  name: "Forum",
  components: {
    NewDiscuss,
    
    methods: {
      addDiscuss() {
        this.$router.push("/new-discuss");
      }
    },
  }
  }
</script>

<style>
</style>