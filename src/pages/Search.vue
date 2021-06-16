<template>
  <div>
    <form action="">
      <label
        >Search Cocktail
        <input v-debounce:300ms="getCoktails" type="text" />
      </label>
    </form>
    <DrinksList path='cocktailSeachId' :cocktails="cocktails" />
    <Modal v-if="modalOpen">
      <DrinkDetails :drink="currentDrink" />
    </Modal>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import DrinksList from '@/components/Drinks/DrinksList'
import DrinkDetails from '@/components/Drinks/DrinkDetails'
import utils from '../utils/api'
import Modal from '@/components/Modal/Modal'
export default {
  components: { DrinksList, Modal, DrinkDetails },
  name: 'Search',
  data() {
    return {
      cocktails: []
    }
  },
  methods: {
    async getCoktails(input) {
      const data = await utils.searchCocktailByName(input)
      this.cocktails = [...data]
    }
  },
  computed: {
    ...mapState(['modalOpen', 'currentDrink'])
  }
}
</script>

<style lang="scss" scoped></style>
