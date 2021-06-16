import Vue from 'vue'
import VueRouter from 'vue-router'
const Search = () => import('@/pages/Search')
const Home = () => import('@/pages/Home')
const FavCocktails = () => import('@/pages/FavCocktails')
const FavIngredients = () => import('@/pages/FavIngredients')


Vue.use(VueRouter)

const routes = [
  {
    path: '/cocktail/:id',
    name: 'cocktailDetails',
    component: Home
  },
  {
    path: '/cocktails/search',
    name: 'cocktailSeach',
    component: Search
  },
  {
    path: '/cocktails/search/:id',
    name: 'cocktailSeachId',
    component: Search
  },
  {
    path: '/cocktails/favorites',
    name: 'FavCocktails',
    component: FavCocktails
  },
  {
    path: '/cocktails/favorites/:id',
    name: 'FavCocktails',
    component: FavCocktails
  },
  {
    path: '/cocktails/ingredients',
    name: 'FavIngredients',
    component: FavIngredients
  },
  {
    path: '/',
    name: 'Home',
    component: Home
  }
]

export const router = new VueRouter({
  base: process.env.BASE_URL,
  mode: 'history',
  routes
})

export default router
