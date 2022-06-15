import axios from 'axios'
import { nanoid } from 'nanoid'
async function getRandomCocktails() {
  let cocktails = []
  for (let i = 0; i < 6; i++) {
    let cocktail = await axios.get('https://www.thecocktaildb.com/api/json/v1/1/random.php').then(data => data.data)
    cocktails = cocktails.concat(cocktail.drinks)
  }
  return cocktails
}

async function getcocktailDetails(id) {
  let cocktail = await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`).then(data => data.data)
  return cocktail.drinks
}

async function searchCocktailByName(query) {
  let cocktail = await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${query}`).then(data => data.data)
  return cocktail.drinks
}

async function addFavoriteCocktail(cocktail) {
  await axios.post('http://localhost:3000/favouriteCocktails', { ...cocktail, id: cocktail.idDrink })
}

async function deleteFavoriteCocktail({ idDrink }) {
  console.log(typeof idDrink)
  await axios.delete(`http://localhost:3000/favouriteCocktails/${idDrink}`)
}

async function getFavoriteCocktails() {
  const data = await axios.get('http://localhost:3000/favouriteCocktails')
  return data.data
}

async function getFavoriteIngredients() {
  const data = await axios.get('http://localhost:3000/favoriteIngredients')
  return data.data
}

async function addFavoriteIngredient(ingredient) {
  const data = await axios.post('http://localhost:3000/favoriteIngredients', { ...ingredient, id: nanoid() })
  return data.data
}
async function deleteFavoriteIngredient({ id }) {
  await axios.delete(`http://localhost:3000/favoriteIngredients/${id}`)
}

async function getCocktailsByIngredients(ingredient) {
  const data = await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${ingredient}`)
  return data.data
}




export default {
  getRandomCocktails,
  getcocktailDetails,
  searchCocktailByName,
  addFavoriteCocktail,
  deleteFavoriteCocktail,
  getFavoriteCocktails,
  addFavoriteIngredient,
  getFavoriteIngredients,
  deleteFavoriteIngredient,
  getCocktailsByIngredients
}
