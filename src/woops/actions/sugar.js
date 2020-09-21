export const sugar = ( listValues ) => {
  return({
    type: 'SET_SUGAR',
    data: { min: listValues[0], max: listValues[1] }
  })
}

export const deleteSugar = ( listValues ) => {
  return({
    type: 'DELETE_SUGAR',
    data: listValues
  })
}