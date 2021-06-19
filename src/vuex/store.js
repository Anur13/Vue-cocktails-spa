import Vue from 'vue'
import Vuex from 'vuex'
import favDrinks from './modules/favDrinks'
import favIngredients from '@/vuex/modules/favIngredients'
import drinksByCateg from '@/vuex/modules/drinksByCateg'

Vue.use(Vuex)

import utils from '../utils/api'
const store = new Vuex.Store({
  modules: { favDrinks, favIngredients, drinksByCateg },
  state: {
    currentDrink: {},
    modalOpen: false
  },
  mutations: {
    setCurrentDrink(state, payload) {
      state.currentDrink = payload
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
    }
  }
})

export default store
