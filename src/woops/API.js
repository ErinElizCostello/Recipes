const API_KEY = 'c976da7e49db48afbbbd3353b50742c7'

export const fetchRecipesFromSpoonacularAPI = (ingredientsList) => {
  return fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&instructionsRequired=true&addRecipeInformation=true&addRecipeNutrition=true&number=10${ingredientsList}`)
    .then(res => res.json())
    // .then(recipe => {
    //   if (recipe.error) {
    //     throw (recipe.error);
    //   }

    //   console.log(recipe)
    // })
}


export const test = (id) => {
  return fetch(`https://api.spoonacular.com/recipes/${id}/informationBulk?includeNutrition=true&apiKey=${API_KEY}`)
    .then(res => res.json())
    .then(recipe => {
      if (recipe.error) {
        throw (recipe.error);
      }

      console.log(recipe)
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



// export const getFavorties = () = {
//   return fetch('http://localhost:3001/favorites')
//     .then(response => response.json())
//     .then(data => {
//     console.log(data)
//     })
// }

export const saveFavorite = (fav) => {
  fetch('http://localhost:3001/favorites', {
    method: 'POST',
    mode: "cors",
    body: JSON.stringify(fav),
    headers: {
      'Content-Type': 'application/json'
    }
  })
    .then(response => response.json())
    .then(data => {
      console.log('saved: ' + data)
    })
}


// exports.deleteFavorite = async (req, res) => {
//   try {
//     console.log
  
//   } catch (error) {
//     console.log(error);
//      res.sendStatus(500);
//   }
// };

// export const fetchRecipe = (ingredientsList) => {


//   return fetch(`https://api.spoonacular.com/recipes/findByIngredients?apiKey=${API_KEY}&ingredients=${ingredientsList}`)
//     .then(res => res.json())

// }