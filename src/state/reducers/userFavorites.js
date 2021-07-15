import { USER_FAVORITES_PENDING, USER_FAVORITES_SUCCESS, USER_FAVORITES_ERROR } from '../constants'


const initialState = {
  pending: false,
  data: [],
  error: null
}


export function userFavorites(state = initialState, action) {
  switch (action.type) {
      case USER_FAVORITES_PENDING:
          return {
              ...state,
              pending: true
          }
      case USER_FAVORITES_SUCCESS:
          return {
              ...state,
              pending: false,
              data: action.data
          }
      case USER_FAVORITES_ERROR:
          return {
              ...state,
              pending: false,
              error: action.error
          }
      default:
          return state;
  }
}