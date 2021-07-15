import { SET_INGREDIENTS_LIST, DELETE_INGREDIENT, CLEAR_INGREDIENTS_LIST } from '../constants'


export const ingredientsList = ( listValues ) => {
  return({
    type: SET_INGREDIENTS_LIST,
    data: listValues
  })
}

export const deleteIngredient = ( listValues ) => {
  return({
    type: DELETE_INGREDIENT,
    data: listValues
  })
}

export const clearIngredientsList = (empty) => {
  return({
    type: CLEAR_INGREDIENTS_LIST,
    data: empty
  })
}

// export const toggleList = ( listValues ) => {
//   return({
//     type: 'TOGGLE_LIST',
//     data: listValues
//   })
// }