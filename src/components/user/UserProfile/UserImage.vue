<template>
  <div id="profile-container">
    <image id="profileImage" src="http://lorempixel.com/100/100" />
  </div>
  <input
    id="imageUpload"
    type="file"
    name="profile_photo"
    placeholder="Photo"
    required=""
    capture
  />
</template>

<script>
export default {
    name: "UserImage",

};


</script>

<style scoped>
#imageUpload {
  display: none;
   border-radius: 50%;
}

#profileImage {
  cursor: pointer;
}

#profile-container {
  width: 150px;
  height: 150px;
  overflow: hidden;
  -webkit-border-radius: 50%;
  -moz-border-radius: 50%;
  -ms-border-radius: 50%;
  -o-border-radius: 50%;
  border-radius: 50%;
}

#profile-container img {
  width: 150px;
  height: 150px;
}
</style>