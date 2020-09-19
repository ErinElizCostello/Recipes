export const mealTypeList = ( listValues ) => {
  return({
    type: 'SET_MEALTYPE',
    data: listValues
  })
}

export const deleteMealType = ( listValues ) => {
  return({
    type: 'DELETE_MEALTYPE',
    data: listValues
  })
}

export const clearMealType = (empty) => {
  return({
    type: 'CLEAR_MEALTYPE',
    data: empty
  })
}