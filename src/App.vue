<template>
  <div id="app">
    <Header />
    <router-view></router-view>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

import Header from '@/components/Header'
export default {
  name: 'App',
  components: {
    Header
  },
  computed: {
    ...mapState(['modalOpen'])
  },
  methods: {
    ...mapActions(['getFavoriteDrinks','getFavIngredients']  )
  },
  created() {
    this.getFavoriteDrinks()
    this.getFavIngredients()
  },


}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
