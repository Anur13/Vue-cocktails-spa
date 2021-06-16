<template>
  <ul>
    <Drink :path='path' v-for="item in cocktails" :cocktail="item" :key="item.strDrink" />
  </ul>
</template>

<script>
import Drink from '@/components/Drinks/Drink'
export default {
  components: { Drink },
  props: {
    cocktails: {
      type: Array,
      required: true,
    },
    path: {
      type: String
    }
  }
}
</script>

<style lang="css" scoped>
ul {
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  padding: 0;
  justify-content: space-between;
}
</style>
