export const cuisineList = ( listValues ) => {

  // let list = Object.keys(listValues).map(key => )
  // [...new Set(listValues)]
  // let theList = new Set (listValues)
  // console.log(theList)
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