import { SET_CUISINE, DELETE_CUISINE, CLEAR_CUISINE } from '../constants'


export const cuisines = (state = [], action) => {
  switch (action.type) {
    case SET_CUISINE:
      return [...state, action.data];
    case DELETE_CUISINE:
      return [...action.data]
    case CLEAR_CUISINE:
      return [...action.data]
    default:
      return state;
  }
};