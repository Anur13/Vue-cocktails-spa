import getCocktailsByCateg from '../../utils/categoriesApi'

export default {
  namespaced: true,
  state: {
    drinksByCateg: []
  },
  mutations: {
    changeDrinksByCateg(state, drinks) {
      state.drinksByCateg = [...drinks]
    }
  },
  actions: {
   async getDrinksByCateg({ commit }, {categ, type}) {
      const drinks = await getCocktailsByCateg(categ, type)
      commit('changeDrinksByCateg', drinks)
    }
  }
}
