export const genSearch = ( listValues ) => {
  return({
    type: 'SET_GEN_SEARCH',
    data: listValues
  })
}

export const deleteGenSearchItem = ( listValues ) => {
  return({
    type: 'DELETE_GEN_SEARCH_ITEM',
    data: listValues
  })
}

export const clearGenSearchList = (empty) => {
  return({
    type: 'CLEAR_GEN_SEARCH_LIST',
    data: empty
  })
}

export const toggleList = ( listValues ) => {
  return({
    type: 'TOGGLE_GEN_SEARCH_LIST',
    data: listValues
  })
}