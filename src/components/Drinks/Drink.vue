<template>
  <li @click="modalOpen">
    <router-link :to="{ name: path, params: { id: cocktail.idDrink } }">
      <h3>{{ cocktail.strDrink }}</h3>
      <img :src="cocktail.strDrinkThumb" alt="" />
    </router-link>
  </li>
</template>

<script>
import { mapActions, mapMutations } from 'vuex'

export default {
  props: {
    path: { type: String },
    cocktail: {
      type: Object
    }
  },
  methods: {
    modalOpen() {
      this.getData(this.cocktail.idDrink)
      this.toggleModal()
    },
    ...mapMutations(['toggleModal']),
    ...mapActions({ getData: 'getCurrentDrink' })
  },
  computed: {
    routeName() {
      return this.$route.name
    }
  }
}
</script>

<style lang="css" scoped>
img {
  display: block;
  height: auto;
  max-width: 100%;
}
li {
  margin-top: 20px;
  width: calc((100% - 20px) / 6);
}
</style>
