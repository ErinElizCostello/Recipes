import { SET_DIET_TYPE, DELETE_DIET_TYPE, CLEAR_DIET_TYPE } from '../constants'


export const dietTypeList = ( listValues ) => {
  return({
    type: SET_DIET_TYPE,
    data: listValues
  })
}

export const deleteDiet = ( listValues ) => {
  return({
    type: DELETE_DIET_TYPE,
    data: listValues
  })
}

export const clearDiet = (empty) => {
  return({
    type: CLEAR_DIET_TYPE,
    data: empty
  })
}