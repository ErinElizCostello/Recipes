import { SET_FAVORITES_CODES, DELETE_FAVORITES_CODES } from '../constants'


export const favoritesCodes = (state = [], action) => {
    switch (action.type) {
      case SET_FAVORITES_CODES:
        return action.data;
      case DELETE_FAVORITES_CODES:
        return action.data
      default:
        return state;
    }
  };