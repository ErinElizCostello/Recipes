export const intolerancesList = ( listValues ) => {
  return({
    type: 'SET_INTOLERANCE',
    data: listValues
  })
}

export const deleteIntolerance = ( listValues ) => {
  return({
    type: 'DELETE_INTOLERANCE',
    data: listValues
  })
}

export const clearIntolerances = (empty) => {
  return({
    type: 'CLEAR_INTOLERANCE',
    data: empty
  })
}