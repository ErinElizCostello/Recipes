//retrieves user's favorite recipes by searching a list of recipe codes saved in our database

// import {SPOONACULAR_KEY} from '../superSECRETKEYZZZ'
const SPOONACULAR_KEY = process.env.REACT_APP_SPOONACULAR_KEY

export const searchBulkRecipes = (listOfCodes) => {
  return fetch(`https://api.spoonacular.com/recipes/informationBulk?includeNutrition=true&apiKey=${SPOONACULAR_KEY}&ids=${listOfCodes}`)
}