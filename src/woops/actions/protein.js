export const protein = ( listValues ) => {
  return({
    type: 'SET_PROTEIN',
    data: { min: listValues[0], max: listValues[1] }
  })
}

export const deleteProtein = ( listValues ) => {
  return({
    type: 'DELETE_PROTEIN',
    data: listValues
  })
}