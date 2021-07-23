

const SPOONACULAR_KEY = process.env.REACT_APP_SPOONACULAR_KEY

export const autoCompleteIngredients = (character) => {
  return fetch(`https://api.spoonacular.com/food/ingredients/autocomplete?apiKey=${SPOONACULAR_KEY}&query=${character}&number=10`)
}