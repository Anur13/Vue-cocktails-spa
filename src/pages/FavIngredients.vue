<template>
  <div>
    <ul>
      <li @click="getCocktails(ing.name)" v-for="ing in favIngredients.favIngredients" :key="ing.name">
        <span class="ingredients">{{ ing.name }}</span>
      </li>
    </ul>
    <DrinksList path="FavIngredients" :cocktails="cocktails" />
    <!-- <ul class="cocktails">
      <li v-for="item in cocktails" :key="item.strDrink">
        <p>{{ item.strDrink }}</p>
        <img :src="item.strDrinkThumb" alt="" />
      </li>
    </ul> -->
    <Modal v-if="modalOpen">
      <DrinkDetails :drink="currentDrink" />
    </Modal>
  </div>
</template>
<script>
import utils from '../utils/api'
import { mapState } from 'vuex'
import DrinksList from '@/components/Drinks/DrinksList'
import DrinkDetails from '@/components/Drinks/DrinkDetails'
import Modal from '@/components/Modal/Modal'
export default {
  components: { DrinksList,Modal,DrinkDetails },
  data() {
    return {
      cocktails: []
    }
  },
  methods: {
    async getCocktails(ingr) {
      const data = await utils.getCocktailsByIngredients(ingr)
      // console.log(data);
      this.cocktails = [...data.drinks]
    }
  },
  computed: {
    ...mapState(['favIngredients', 'currentDrink','modalOpen'])
  }
}
</script>

<style lang="css" scoped>
ul {
  list-style: none;
  padding: 0;
}
.ingredients {
  cursor: pointer;
}
img {
  display: block;
  height: auto;
  max-width: 100%;
}
.cocktails {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
.cocktails li {
  margin-top: 20px;
  width: calc((100% - 20px) / 6);
}
</style>
