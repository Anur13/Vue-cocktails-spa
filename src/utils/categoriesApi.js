import axios from 'axios'

async function getCocktailsByCateg(categ, type) {
  let cocktail = await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?${type}=${categ}`).then(data => data.data)
  return cocktail.drinks
}

export default getCocktailsByCateg
