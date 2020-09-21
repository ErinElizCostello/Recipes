export const carbs = ( listValues ) => {
  return({
    type: 'SET_CARBS',
    data: { min: listValues[0], max: listValues[1] }
  })
}

export const deleteCarbs = ( listValues ) => {
  return({
    type: 'DELETE_CARBS',
    data: listValues
  })
}