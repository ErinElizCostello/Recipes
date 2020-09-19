export const theList = ( listValues ) => {
  return({
    type: 'SET_LIST',
    data: listValues
  })
}

export const deleteItem = ( listValues ) => {
  return({
    type: 'DELETE_ITEM',
    data: listValues
  })
}

export const clearList = (empty) => {
  return({
    type: 'CLEAR_LIST',
    data: empty
  })
}

export const toggleList = ( listValues ) => {
  return({
    type: 'TOGGLE_LIST',
    data: listValues
  })
}