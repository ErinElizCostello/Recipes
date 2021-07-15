import { SET_INGREDIENTS_LIST, DELETE_INGREDIENT, CLEAR_INGREDIENTS_LIST } from '../constants'


export const ingredientsList = (state = [], action) => {
  switch (action.type) {
    case SET_INGREDIENTS_LIST:
      return [...state, action.data];
    case DELETE_INGREDIENT:
      return [...action.data]
    case CLEAR_INGREDIENTS_LIST:
      return [...action.data]
    // case 'TOGGLE_LIST':
    //   return action.data
    default:
      return state;
  }
};