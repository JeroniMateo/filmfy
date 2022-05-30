import { createRouter, createWebHistory } from 'vue-router'

import Home from '../views/Home.vue'

import DetailedMoviePage from "@/views/movies/DetailedMoviePage";
import MainMoviesPage from "@/views/movies/MainMoviesPage";

import Playlists from '../views/my-lists/Playlists.vue'

import UserProfile from '../views/user/UserProfile.vue'
import EditProfile from '../views/user/EditProfile.vue'
import Register from '../views/user/Register.vue'

import Login from '../views/user/Login.vue'
import MovieCategories from "@/views/movies/MovieCategories";
import MovieYear from "@/views/movies/MovieYear";

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },

  {
    path: '/movies',
    name: 'movies',
    component: MainMoviesPage
  },
  {
    path: '/movies/:movie',
    name: 'movie-content',
    component: DetailedMoviePage
  },
  {
    path: '/movies/category/:category',
    name: 'movie-category',
    component: MovieCategories
  },
  {
    path: '/movies/years/:year',
    name: 'movie-year',
    component: MovieYear
  },

  {
    path: '/playlists',
    name: 'playlists',
    component: Playlists
  },

  {
    path: '/userProfile',
    name: 'userProfile',
    component: UserProfile
  }, 
  {
    path: '/editProfile',
    name: 'editProfile',
    component: EditProfile
  },

  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/register',
    name: 'register',
    component: Register
  },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
