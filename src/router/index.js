import { createRouter, createWebHistory } from 'vue-router'

import Home from '../views/Home.vue'

import Movies from '../views/watchContent/Movies.vue'
import MovieContent from '../views/watchContent/MoviesContent/MovieContent.vue'

import BillBoard from '../views/movies-sections/BillBoard.vue'

import Outstandings from '../views/movies-sections/Outstandings.vue'

import Playlists from '../views/my-lists/Playlists.vue'
import MoviesList from '../views/my-lists/MoviesList.vue'
import VerMasGenres from '../views/watchContent/VerMasGenres.vue'
import UserProfile from '../views/user/UserProfile.vue'
import UserSettings from '../views/user/UserSettings.vue'

import Register from '../views/user/Register.vue'
import Login from '../views/user/Login.vue'

import Search from '../views/Searching/SearchResults.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },

  {
    path: '/movies',
    name: 'movies',
    component: Movies
  },
  {
    path: '/movies/:id',
    name: 'movie-content',
    component: MovieContent
  },
  {
    path:'/movies/:genre/:id',
    name: 'movie-content-genre',
    component: VerMasGenres
  },
  {
    path: '/billboard',
    name: 'billboard',
    component: BillBoard
  },

  {
    path: '/outstandings',
    name: 'outstandings',
    component: Outstandings
  },

  {
    path: '/playlists',
    name: 'playlists',
    component: Playlists
  },
  {
    path: '/moviesList/:id',
    name: 'MoviesList',
    component: MoviesList
  },

  {
    path: '/profile',
    name: 'profile',
    component: UserProfile
  },
  {
    path: '/settings',
    name: 'settings',
    component: UserSettings
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

  {
    path: '/search/:query',
    name: 'search',
    component: Search
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
