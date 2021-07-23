//For searching recipes

// import {SPOONACULAR_KEY} from '../superSECRETKEYZZZ'
const SPOONACULAR_KEY = process.env.REACT_APP_SPOONACULAR_KEY

export const searchRecipes = (ingredientsList) => {
  return fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${SPOONACULAR_KEY}&instructionsRequired=true&addRecipeInformation=true&addRecipeNutrition=true&number=20${ingredientsList}`)
}