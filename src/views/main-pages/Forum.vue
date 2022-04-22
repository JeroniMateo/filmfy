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


export default {
  name: "Forum",
}
</script>

<style scoped>
</style>