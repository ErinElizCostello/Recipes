export const aMaximumReadyTime = ( listValues ) => {
  return({
    type: 'SET_MAXIMUMREADYTIME',
    data: listValues
  })
}

export const deleteMaximumReadyTime = ( listValues ) => {
  return({
    type: 'DELETE_MAXIMUMREADYTIME',
    data: listValues
  })
}