export const selects = ( listValues ) => {
  return({
    type: 'SET_SELECT',
    data: listValues
  })
}

export const selectsDelete = ( listValues ) => {
  return({
    type: 'DELETE_SELECT',
    data: listValues
  })
}

export const selectsClear = ( listValues ) => {
  return({
    type: 'CLEAR_SELECT',
    data: listValues
  })
}