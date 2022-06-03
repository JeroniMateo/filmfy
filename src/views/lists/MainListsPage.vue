<template>
  <main class="bg-bgmain">
    <Heading />

    <div class="container-md mt-5">
      <MonthPopular />
    </div>

    <div class="container-md mt-5">
      <div class="row d-flex justify-content-center">
        <RecentlyUpdated />
        <FilmfySelection />
      </div>
    </div>
  </main>
</template>

<script>
import Header from '@/components/basics/Header'
import Footer from '@/components/basics/Footer'
import Heading from '@/components/lists/lists-page/Heading'
import MonthPopular from '@/components/lists/lists-page/MonthPopular'
import RecentlyUpdated from '@/components/lists/lists-page/RecentlyUpdated'
import FilmfySelection from '@/components/lists/lists-page/FilmfySelection'

export default {
  name: 'MainListsPage',
  components: {
    FilmfySelection,
    RecentlyUpdated,
    MonthPopular,
    Heading,
    Header,
    Footer
  }
}
</script>

<style>
.image-overlap {
  direction: rtl; /* This is to get the stack with left on top */
  text-align: left; /* Now need to explitly align left */
  padding-left: 25px; /* Same value as the negative margin */
}

.movie-img img {
  border-radius: 10px;
  position: relative;
  left: -5px;
  margin-left: -25px;
  z-index: 1;
}

ol,
ul {
  list-style: none;
}

/** **/

.poster-list.-overlapped.-p70 .poster,
.poster-list.-overlapped.-p150 .poster {
  box-shadow: 2px 0 7px #000;
  margin-right: -25px;
}

.poster-list.-overlapped .poster:first-child {
  z-index: 15;
}

.poster-list.-overlapped .poster:nth-of-type(2) {
  z-index: 14;
}

.poster-list.-overlapped .poster:nth-of-type(3) {
  z-index: 13;
}

.poster-list.-overlapped .poster:nth-of-type(4) {
  z-index: 12;
}

.poster-list.-overlapped .poster:nth-of-type(5) {
  z-index: 11;
}

.poster-list.-overlapped .poster {
  float: left;
}
.poster {
  background: #161718;
  box-shadow: 0 1px 3px rgb(0 0 0 / 35%);
}
.poster,
.poster-container {
  -webkit-background-clip: padding-box;
  border-radius: 4px;
  display: inline-block;
  overflow: hidden;
  position: relative;
}

.poster .image {
  border-radius: 4px;
  display: block;
}

@media only screen and (max-width: 992px) {
  .recently-liked > div > div > div {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
}

@media only screen and (max-width: 440px) {
  .month-popular > div > div > a > div > span > img {
    width: 75px;
    height: 145px;
  }
}
</style>
