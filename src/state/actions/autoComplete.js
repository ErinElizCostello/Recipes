import { AUTOCOMPLETE_PENDING, AUTOCOMPLETE_SUCCESS } from '../constants'


export const autoCompletePending = () => {
  return {
    type: AUTOCOMPLETE_PENDING
  }
}

export const autoCompleteSuccess = ACData => {
  return {
    type: AUTOCOMPLETE_SUCCESS,
    data: ACData
  }
}