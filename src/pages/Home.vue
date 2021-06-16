<template>
  <div>
    <DrinksList path='cocktailDetails' :cocktails="cocktails" />
    <Modal v-if="modalOpen">
      <DrinkDetails :drink='currentDrink' />
    </Modal>
  </div>
</template>

<script>
import DrinkDetails from '@/components/Drinks/DrinkDetails'
import DrinksList from '@/components/Drinks/DrinksList'
import Modal from '@/components/Modal/Modal'
import { mapState } from 'vuex'
import utils from '../utils/api'
export default {
  name: 'Home',

  components: { DrinksList, Modal, DrinkDetails },
  data() {
    return {
      cocktails: []
    }
  },
  async created() {
    const cocktails = await utils.getRandomCocktails()
    this.cocktails = this.cocktails.concat(cocktails)
  },
  computed: {
    ...mapState(['modalOpen', 'currentDrink'])
  }
}
</script>

<style lang="css" scoped>

</style>
