<template>
  <article>
    <h3 class="modal-header">{{ drink.strDrink }}</h3>
    <img v-if="!checkDrinkFav" @click="changeFav" class="fav" src="../../assets/beer-black.svg" alt="" />
    <img v-else @click="changeFav" class="fav" src="../../assets/beer-red.svg" alt="" />

    <div class="modal-data">
      <img :src="drink.strDrinkThumb" alt="" />
      <ul class="description-list">
        <li class="modal-data-item"><b>Category:</b> {{ drink.strCategory }}</li>
        <li class="modal-data-item"><b>Glass:</b> {{ drink.strGlass }}</li>
        <b>Ingredients:</b>
        <ul class="ingredients-list">
          <li v-for="item in getIngredientsAndQuantity" :key="item[0]">
            <div class="ingredient">
              <span>{{ item[0] }}</span>
              <span>{{ item[1] }}</span>
              <img class="add-delete" :class="checkFavIngr(item[0])" src="../../assets/letter-x.png" @click="changeFavIngredient(item[0])" />
            </div>
          </li>
        </ul>
        <li class="modal-data-item"><b>Instructions</b>: {{ drink.strInstructions }}</li>
      </ul>
    </div>
    <iframe v-if="drink.strVideo" width="420" height="315" :src="getVideoUrl"> </iframe>
  </article>
</template>

<script>
import { mapActions, mapState } from 'vuex'
export default {
  props: {
    drink: {
      type: Object
    }
  },
  methods: {
    checkFavIngr(ingr) {
      const present = this.favIngredients.favIngredients.find(item => item.name === ingr)
      if (present) return 'add'
    },
    changeFav() {
      this.changeFavDrinks(this.drink)
    },
    changeFavIngredient(ingredient) {
      this.changeFavIngredients({ name: ingredient })
    },

    ...mapActions({changeFavDrinks: 'favDrinks/changeFavDrinks', changeFavIngredients: 'favIngredients/changeFavIngredients'})
  },
  computed: {
    getVideoUrl() {
      const videoId = this.drink.strVideo.split('v=')[1]
      return `https://www.youtube.com/embed/${videoId}`
    },
    getIngredientsAndQuantity() {
      const values = Object.entries(this.drink)
      const ingredients = values
        .filter(categ => {
          if (categ[1] !== null && categ[0].includes('Ingredient') && categ[1] !== '') {
            return categ
          }
        })
        .map(item => item[1])
      const ammounts = values
        .filter(categ => {
          if (categ[1] !== null && categ[0].includes('Measure')) {
            return categ[1]
          }
        })
        .map(item => item[1])
      const final = ingredients.map((item, index) => [item, ammounts[index]])
      return final
    },

    checkDrinkFav() {
      const check = this.favDrinks.favDrinks.find(item => item.idDrink === this.drink.idDrink)
      if (check) return true
      return false
    },
    ...mapState(['favDrinks', 'favIngredients'])
  }
}
</script>

<style lang="css" scoped>
img {
  display: block;
  height: auto;
  max-width: 50%;
  border-radius: 10px;
}
div {
  display: flex;
}
.description-list {
  list-style: none;
  text-align: left;
}
.ingredients-list {
  padding-left: 20px;
}
.fav {
  margin-left: auto;
  cursor: pointer;
}
.add-delete {
  width: 15px;
  height: 15px;
  display: block;
  cursor: pointer;
  text-align: center;
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
  transform: rotate(45deg);
}
.add {
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
  transform: rotate(0deg);
}
.ingredient {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
}
.modal-header {
  margin: 0;
}
.modal-data .modal-data-item{
  padding-top: 2px;
  padding-bottom: 2px;
}
</style>
