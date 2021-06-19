<template>
  <div class="header">
    <ul class="menu">
      Categories
      <li class="category">
        Alcohol
        <ul class="submenu">
          <li @click="getDrinks">Alcoholic</li>
          <li @click="getDrinks">Non-alcoholic</li>
        </ul>
      </li>
      <li class="category">
        Type
        <ul class="submenu">
          <li @click="getDrinks">Ordinary drink</li>
          <li @click="getDrinks">Cocktail</li>
        </ul>
      </li>
      <li class="category">
        Glass
        <ul class="submenu">
          <li @click="getDrinks">Cocktail glass</li>
          <li @click="getDrinks">Champagne flute</li>
        </ul>
      </li>
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
          <router-link :to="{ name: 'FavCocktails' }">Favorite cocktails</router-link>
        </li>
        <li>
          <router-link :to="{ name: 'FavIngredients' }">Favorite ingredients</router-link>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  methods: {
    getDrinks(event) {
      const { textContent } = event.target
      const grandParentText = event.target.parentNode.parentNode.textContent

      function categHandler() {
        let modifiedName = textContent
        if (textContent.includes(' ')) {
          modifiedName = textContent.split(' ')
          modifiedName[1] = modifiedName[1][0].toUpperCase() + modifiedName[1].slice(1)
          modifiedName = modifiedName.join('_')
        }
        if (textContent.includes('-')) {
          modifiedName = textContent.split('-')
          modifiedName[1] = modifiedName[1][0].toUpperCase() + modifiedName[1].slice(1)
          modifiedName = modifiedName.join('_')
        }
        return modifiedName
      }
      categHandler()
      if (grandParentText.includes('Alcohol')) {
        const categ = categHandler()
        const type = 'a'
        this.getDrinksByCateg({ categ, type })
      }
      if (grandParentText.includes('Type')) {
        const categ = categHandler()
        const type = 'c'
        this.getDrinksByCateg({ categ, type })
      }
      if (grandParentText.includes('Glass')) {
        const categ = categHandler()
        const type = 'g'
        this.getDrinksByCateg({ categ, type })
      }
    },
    ...mapActions({
      getDrinksByCateg: 'drinksByCateg/getDrinksByCateg'
    })
  }
}
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
.menu {
  flex-direction: column;
}
.menu:hover .category {
  opacity: 1;
}

.category {
  position: relative;
  margin-top: 20px;
  opacity: 0;
  width: 120px;
}
.submenu {
  position: absolute;
  transform: translateY(-75%);
  margin-left: 100px;
  border: 1px solid black;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0;
  width: max-content;
  padding: 5px 0 5px 30px;
  border-radius: 4px;
}
.category:hover .submenu {
  opacity: 1;
}
</style>
