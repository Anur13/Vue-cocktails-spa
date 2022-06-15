<template>
  <div id="app">
    <Header/>
    <router-view></router-view>
  </div>
</template>

<script>
import {mapState, mapActions} from 'vuex'

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
    ...mapActions({
      getFavoriteDrinks: 'favDrinks/getFavoriteDrinks',
      getFavIngredients: 'favIngredients/getFavIngredients',
    })
  },
  created() {
    this.getFavoriteDrinks()
    this.getFavIngredients()
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: #DBCBD8;
  height: 100%;
  padding: 20px;
  padding-bottom: 60px;
}

body {
  margin: 0;
  height: 100vh;
}

a {
  text-decoration: none;
  color: #101935;
}
</style>
