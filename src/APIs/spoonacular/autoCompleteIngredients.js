// for the autocomplete for the ingredients component

import { SPOONACULAR_KEY } from '../superSECRETKEYZZZ'

export const autoCompleteIngredients = (character) => {
  return fetch(`https://api.spoonacular.com/food/ingredients/autocomplete?apiKey=${SPOONACULAR_KEY}&query=${character}&number=10`)
}