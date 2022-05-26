import { createRouter, createWebHistory } from 'vue-router'

import Home from '../views/Home.vue'
import Browser from '../views/Browser.vue'

import DetailedMoviePage from "@/views/movies/DetailedMoviePage";
import MainMoviesPage from "@/views/movies/MainMoviesPage";

import BillBoard from '../views/BillBoard.vue'

import Outstandings from '../views/Outstandings.vue'
import Playlists from '../views/my-lists/Playlists.vue'

import ListContent from '../views/my-lists/ListContent.vue'

import UserProfile from '../views/user/UserProfile.vue'
import Register from '../views/user/Register.vue'

import Login from '../views/user/Login.vue'
import Search from '../views/SearchResults.vue'
import MovieCategories from "@/components/movies/movies-page/MovieCategories";
import MovieYear from "@/components/movies/movies-page/MovieYear";
import CommentMovie from "@/views/comments/CommentMovie";

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/browser',
    name: 'browser',
    component: Browser
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
    path: '/comments/:movie',
    name: 'movie-comments',
    component: CommentMovie
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
    path: '/listContent/:id',
    name: 'ListContent',
    component: ListContent
  },

  {
    path: '/userProfile',
    name: 'profile',
    component: UserProfile
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
