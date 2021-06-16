import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import utils from '../utils/api'
const store = new Vuex.Store({
  state: {
    currentDrink: {},
    modalOpen: false,
    favDrinks: [],
    favIngredients: []
  },
  mutations: {
    setCurrentDrink(state, payload) {
      state.currentDrink = payload
    },
    async changeFavDrinks(state, drinks) {
      state.favDrinks = [...drinks]
    },
    async changeFavIngredients(state, ingredients) {
      state.favIngredients = [...ingredients]
    },
    toggleModal(state) {
      if (state.modalOpen) {
        state.currentDrink = {}
      }
      state.modalOpen = !state.modalOpen
    }
  },

  actions: {
    async getCurrentDrink({ commit }, id) {
      const data = await utils.getcocktailDetails(id)
      commit('setCurrentDrink', data[0])
    },

    async getFavoriteDrinks({ commit, state }) {
      const cocktails = await utils.getFavoriteCocktails()
      const newFavDrinks = state.favDrinks.concat(cocktails)
      commit('changeFavDrinks', newFavDrinks)
    },

    async changeFavDrinks({ commit, state }, drink) {
      const present = state.favDrinks.find(item => item.idDrink === drink.idDrink)
      if (present) {
        const newFavDrinks = state.favDrinks.filter(item => item.idDrink !== drink.idDrink)
        await utils.deleteFavoriteCocktail(drink)
        commit('changeFavDrinks', newFavDrinks)
        return
      }
      const newFavDrinks = state.favDrinks.concat(drink)
      commit('changeFavDrinks', newFavDrinks)
      await utils.addFavoriteCocktail(drink)
    },

    async getFavIngredients({ commit, state }) {
      const ingredients = await utils.getFavoriteIngredients()
      const newFavIngredients = state.favIngredients.concat(ingredients)
      commit('changeFavIngredients', newFavIngredients)
    },

    async changeFavIngredients({ commit, state }, ingredient) {
      const present = state.favIngredients.find(item => item.name === ingredient.name)
      if (present) {
        console.log(present)
        const newFavIngredients = state.favIngredients.filter(item => item.name !== ingredient.name)
        await utils.deleteFavoriteIngredient(present)
        commit('changeFavIngredients', newFavIngredients)
        return
      }
      const ingr = await utils.addFavoriteIngredient(ingredient)
      const newFavIngredients = state.favIngredients.concat(ingr)
      commit('changeFavIngredients', newFavIngredients)
    }
  }
})

export default store
