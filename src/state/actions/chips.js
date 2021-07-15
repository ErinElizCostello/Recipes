import { SET_CHIPS, DELETE_CHIP, CLEAR_CHIPS } from '../constants'


export const setChips = ( listofChips ) => {
  return({
    type: SET_CHIPS,
    data: listofChips
  })
}

export const deleteChip = ( listofChips ) => {
  return({
    type: DELETE_CHIP,
    data: listofChips
  })
}

export const clearChips = (empty) => {
  return({
    type: CLEAR_CHIPS,
    data: empty
  })
}