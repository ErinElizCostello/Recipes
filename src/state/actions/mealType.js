import { SET_MEAL_TYPE, DELETE_MEAL_TYPE, CLEAR_MEAL_TYPE } from '../constants'


export const mealTypeList = ( listValues ) => {
  return({
    type: SET_MEAL_TYPE,
    data: listValues
  })
}

export const deleteMealType = ( listValues ) => {
  return({
    type: DELETE_MEAL_TYPE,
    data: listValues
  })
}

export const clearMealType = (empty) => {
  return({
    type: CLEAR_MEAL_TYPE,
    data: empty
  })
}