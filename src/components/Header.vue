<template>
  <div class="header">
    <ul class="menu">
      <li class="menu-title">Categories</li>
      <div class="content">
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
      </div>

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
import {mapActions} from 'vuex'

export default {
  methods: {
    getDrinks(event) {
      const {textContent} = event.target
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
        this.getDrinksByCateg({categ, type})
      }
      if (grandParentText.includes('Type')) {
        const categ = categHandler()
        const type = 'c'
        this.getDrinksByCateg({categ, type})
      }
      if (grandParentText.includes('Glass')) {
        const categ = categHandler()
        const type = 'g'
        this.getDrinksByCateg({categ, type})
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
  padding-bottom: 20px;
}
.menu li {
  cursor: pointer;
}

.menu-title {
  font-size: large;
  font-weight: bold;
}

.menu:hover .category {
  display: block;
}

.menu:hover .content {
  display: block;
}

.category {
  position: relative;
  padding-top: 20px;
  margin-right: 0;
  display: none;
  width: 120px;
}

.content {
  position: absolute;
  margin-top: 40px;
  display: none;
  background-color: #42033D;
  border: 1px solid black;
  color: #9AD4D6;
  border-radius: 4px;
}

.content .category:last-child {
  margin-bottom: 20px;
}

.submenu {
  position: absolute;
  transform: translateY(-75%);
  margin-left: 100px;
  border: 1px solid black;
  display: none;
  justify-content: center;
  align-items: center;
  width: max-content;
  margin-top: 20px;
  padding: 5px 0 5px 30px;
  border-radius: 4px;
  background-color: #42033D;
}

.submenu li {
  margin-bottom: 10px;
}

.submenu li:first-child {
  margin-top: 10px;
}

.category:hover .submenu {
  display: block;
}
</style>
