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
  height: 100%;
  max-width: 100%;
  border-radius: 50%;
  margin-right: auto;
  margin-left: auto;
}
li {
  margin-top: 80px;
  width: calc((100% - 20px) / 3);
  height: 40vh;
}
li:nth-last-child(n+4){
  margin-top: 0;
}
</style>
