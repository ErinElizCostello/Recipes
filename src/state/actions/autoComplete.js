import { AUTOCOMPLETE_PENDING, AUTOCOMPLETE_SUCCESS, AUTOCOMPLETE_ERROR } from '../constants'


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

// export const autoCompleteError = error => {
//   return {
//     type: AUTOCOMPLETE_ERROR,
//     error
//   }
// }