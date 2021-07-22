import { SET_GENERAL_SEARCH } from '../constants'

export const generalSearch = ( listValues ) => {
  return({
    type: SET_GENERAL_SEARCH,
    data: listValues
  })
}