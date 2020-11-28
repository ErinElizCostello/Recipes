const API_KEY = 'c976da7e49db48afbbbd3353b50742c7'

export const fetchRecipe = (ingredientsList) => {


  return fetch(`https://api.spoonacular.com/recipes/findByIngredients?apiKey=${API_KEY}&ingredients=${ingredientsList}`)
    .then(res => res.json())

}

export const fetchRecipes = (ingredientsList) => {
  return fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&instructionsRequired=true&addRecipeInformation=true&addRecipeNutrition=true&number=10${ingredientsList}`)
    .then(res => res.json())
    .then(recipe => {
      if (recipe.error) {
        throw (recipe.error);
      }

      // console.log(recipe)
    })
}

export let autoIngredients = []

export const ingredientsAutocomplete = (parameters) => {
  return fetch(`https://api.spoonacular.com/food/ingredients/autocomplete?apiKey=${API_KEY}&query=${parameters}&number=10`)
    .then(res => res.json())
    // .then(recipe => {
    //   if (recipe.error) {
    //     throw (recipe.error);
    //   }
    //   console.log(recipe)
    //   dispatch(autoComp(recipe))
    // })
}