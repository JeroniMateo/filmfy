<template>
  <div id="UserSettings">
    <div class="container-fluid">
      <UserImage />
      <UserItems />
    </div>
  </div>
</template>

<script>
import UserImage from '../../components/user/UserProfile/UserImage.vue'
import UserItems from '../../components/user/UserProfile/UserItems.vue'
export default {
  name: 'UserSettings',
  components: {
    UserImage,
    UserItems
  }
}
</script>

<style>
#UserSettings {
  margin: auto;
  width: 70%;
}
</style>
