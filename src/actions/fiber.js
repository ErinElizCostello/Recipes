export const fiber = ( listValues ) => {
  return({
    type: 'SET_FIBER',
    data: { min: listValues[0], max: listValues[1] }
  })
}

export const deleteFiber = ( listValues ) => {
  return({
    type: 'DELETE_FIBER',
    data: listValues
  })
}