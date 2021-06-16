<template>
  <div>
    <h2>Your Favorite cocktails</h2>
    <DrinksList path="FavCocktails" :cocktails="favDrinks" />

    <Modal v-if="modalOpen">
      <DrinkDetails :drink="currentDrink" />
    </Modal>
  </div>
</template>

<script>
import { mapState } from 'vuex'

import DrinkDetails from '@/components/Drinks/DrinkDetails'
import DrinksList from '@/components/Drinks/DrinksList'
import Modal from '@/components/Modal/Modal'
export default {
  name: 'FavCocktails',
  components: { DrinksList, Modal, DrinkDetails },
  computed: {
    ...mapState(['favDrinks', 'modalOpen','currentDrink'])
  },


}
</script>

<style lang="scss" scoped></style>
