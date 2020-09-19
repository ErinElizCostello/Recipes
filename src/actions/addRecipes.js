import { fetchRecipePending, fetchRecipeSuccess, fetchRecipeError } from './fetching.js';
import { fetchRecipe } from '../APIs/API';


export const addRecipe = (ingredients) => dispatch => {

  

  // let request = `https://api.spoonacular.com/recipes/complexSearch?query=pasta&maxFat=25&number=2`

  dispatch(fetchRecipePending());

  const ingredientsList = ingredients.map(e => !ingredients[-1] ? e += ',+' : e)

  fetchRecipe(ingredientsList).then(recipe => {
    if (recipe.error) {
      throw (recipe.error);
    }

    let recipeInfo = []

    recipe.map(e => {
      const eachRecipe = {
        image: e.image,
        title: e.title,
        usedIngredients: e.usedIngredients.map(item => item.name),
        unusedIngredients: e.unusedIngredients.map(item => item.name)
      }
      recipeInfo.push(eachRecipe)
    })

    dispatch(fetchRecipeSuccess(recipeInfo));
  })
    .catch(error => {
      dispatch(fetchRecipeError(error));
    })
}

