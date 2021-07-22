import { SET_FAVORITES_CODES } from '../constants'

export const favoritesCodes = favoritesCodes => {
  return {
    type: SET_FAVORITES_CODES,
    data: favoritesCodes
  }
}