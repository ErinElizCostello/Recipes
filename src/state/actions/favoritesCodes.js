// export const fetchFavoritesPending = () => {
//   return {
//       type: 'FETCH_FAVORITES_PENDING'
//   }
// }

import { SET_FAVORITES_CODES } from '../constants'

export const favoritesCodes = favoritesCodes => {
  return {
    type: SET_FAVORITES_CODES,
    data: favoritesCodes
  }
}

// export const fetchFavoritesError = error => {
//   return {
//       type: 'FETCH_FAVORITES_ERROR',
//       error
//   }
// }