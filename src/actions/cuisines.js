export const cuisineList = ( listValues ) => {
  return({
    type: 'SET_CUISINE',
    data: listValues
  })
}

export const deleteCuisine = ( listValues ) => {
  return({
    type: 'DELETE_CUISINE',
    data: listValues
  })
}

export const clearCuisine = (empty) => {
  return({
    type: 'CLEAR_CUISINE',
    data: empty
  })
}