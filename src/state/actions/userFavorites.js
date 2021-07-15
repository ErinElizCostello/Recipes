import { USER_FAVORITES_PENDING, USER_FAVORITES_SUCCESS, USER_FAVORITES_ERROR } from '../constants'

export const userFavoritesPending = () => {
  return {
      type: USER_FAVORITES_PENDING
  }
}

export const userFavoritesSuccess = recipeData => {
  return {
      type: USER_FAVORITES_SUCCESS,
      data: recipeData
  }
}

export const userFavoritesError = error => {
  return {
      type: USER_FAVORITES_ERROR,
      error
  }
}