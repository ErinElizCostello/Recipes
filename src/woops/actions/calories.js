export const calories = ( listValues ) => {
  return({
    type: 'SET_CALORIES',
    data: { min: listValues[0], max: listValues[1] }
  })
}

export const deleteCalories = ( listValues ) => {
  return({
    type: 'DELETE_CALORIES',
    data: listValues
  })
}