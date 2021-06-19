import utils from '../../utils/api'

export default {
  namespaced: true,
  state: {
    favDrinks: []
  },
  mutations: {
     changeFavDrinks(state, drinks) {
      state.favDrinks = [...drinks]
    }
  },
  actions: {
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
    }
  }
}
