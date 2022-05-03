import { createRouter, createWebHistory } from 'vue-router'
import Welcome from '../views/Welcome'
import Home from '../views/Home.vue'

import Movies from '../views/watchContent/Movies.vue'
import MovieContent from '../views/watchContent/MoviesContent/MovieContent.vue'
import BillBoard from '../views/movies-sections/BillBoard.vue'
import Outstandings from '../views/movies-sections/Outstandings.vue'
import Trailers from '../views/movies-sections/Trailers.vue'

import Playlists from '../views/my-lists/Playlists.vue'
import MoviesList from '../views/my-lists/MoviesList.vue'

import UserProfile from '../views/user/UserProfile.vue'
import UserSettings from '../views/user/UserSettings.vue'

import Register from '../views/user/Register.vue'
import Login from '../views/user/Login.vue'

const routes = [
  {
    path: '/',
    name: 'welcome',
    component: Welcome
  },
  {
    path: '/home',
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
    path: '/billboard',
    name: 'billboard',
    component: BillBoard
  },
  {
    path: '/trailers',
    name: 'trailers',
    component: Trailers
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
    path: '/moviesList',
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
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
