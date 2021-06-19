import utils from '../../utils/api'

export default {
  namespaced: true,
  state: {
    favIngredients: []
  },
  mutations: {
     changeFavIngredients(state, ingredients) {
      state.favIngredients = [...ingredients]
    }
  },
  actions: {
    async getFavIngredients({ commit, state }) {
      const ingredients = await utils.getFavoriteIngredients()
      const newFavIngredients = state.favIngredients.concat(ingredients)
      commit('changeFavIngredients', newFavIngredients)
    },

    async changeFavIngredients({ commit, state }, ingredient) {
      const present = state.favIngredients.find(item => item.name === ingredient.name)
      if (present) {
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
}
