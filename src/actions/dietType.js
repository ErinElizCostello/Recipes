export const dietTypeList = ( listValues ) => {
  return({
    type: 'SET_DIETTYPE',
    data: listValues
  })
}

export const deleteDiet = ( listValues ) => {
  return({
    type: 'DELETE_DIETTYPE',
    data: listValues
  })
}

export const clearDiet = (empty) => {
  return({
    type: 'CLEAR_DIETTYPE',
    data: empty
  })
}