<template>
  <div class="header">
    <ul>
      TODO: categories
    </ul>
    <nav>
      <ul>
          <li>
          <router-link exact-path :to="{ name: 'Home' }">Home</router-link>
        </li>
        <li>
          <router-link :to="{ name: 'cocktailSeach' }">Search</router-link>
        </li>
        <li>
          <router-link :to="{name : 'FavCocktails'}">Favorite cocktails</router-link>
        </li>
        <li>
          <router-link :to="{name : 'FavIngredients'}">Favorite ingredients</router-link>
        </li>
        <li>
          <router-link to="/">My cocktails</router-link>
        </li>
        <li>
          <router-link to="/">Create cocktail</router-link>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {}
</script>

<style lang="css" scoped>
ul {
  list-style: none;
  display: flex;
  justify-content: space-between;
}
.header {
  display: flex;
  justify-content: space-between;
}
li {
  margin-right: 20px;
}
</style>
