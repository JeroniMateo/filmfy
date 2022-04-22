<template>
<div id="playlists">
    <vue-playlist :playlist='playlist'></vue-playlist>
    </div>  
</template>

<script>
export default {
    name:playlists,

data(){
    return{
        playlist: [
            {bucketRef: 'YOUR_VIDEO_URL'},
            {bucketRef: 'YOUR_VIDEO_URL'}
          ]
    }
},
}
</script>

<style>

</style>