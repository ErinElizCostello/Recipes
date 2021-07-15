import { SET_GENERAL_SEARCH } from '../constants'

export const generalSearch = ( listValues ) => {
  return({
    type: SET_GENERAL_SEARCH,
    data: listValues
  })
}

// export const deleteGeneralSearchItem = ( listValues ) => {
//   return({
//     type: 'DELETE_GEN_SEARCH_ITEM',
//     data: listValues
//   })
// }

// export const clearGeneralSearchList = (empty) => {
//   return({
//     type: 'CLEAR_GEN_SEARCH_LIST',
//     data: empty
//   })
// }

// export const toggleList = ( listValues ) => {
//   return({
//     type: 'TOGGLE_GEN_SEARCH_LIST',
//     data: listValues
//   })
// }