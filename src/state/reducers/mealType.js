import { SET_MEAL_TYPE, DELETE_MEAL_TYPE, CLEAR_MEAL_TYPE } from '../constants'


export const mealType = (state = [], action) => {
  switch (action.type) {
    case SET_MEAL_TYPE:
      return action.data;
    case DELETE_MEAL_TYPE:
      return action.data;
    case CLEAR_MEAL_TYPE:
      return action.data;
    default:
      return state;
  }
};