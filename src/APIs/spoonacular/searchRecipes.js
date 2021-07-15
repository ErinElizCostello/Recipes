//For searching recipes

import {SPOONACULAR_KEY} from '../superSECRETKEYZZZ'

export const searchRecipes = (ingredientsList) => {
  return fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${SPOONACULAR_KEY}&instructionsRequired=true&addRecipeInformation=true&addRecipeNutrition=true&number=20${ingredientsList}`)
}