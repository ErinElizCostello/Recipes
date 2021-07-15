import { SET_INTOLERANCE, DELETE_INTOLERANCE, CLEAR_INTOLERANCE } from '../constants'


export const intolerances = (state = [], action) => {
  switch (action.type) {
    case SET_INTOLERANCE:
      return [...state, action.data];
    case DELETE_INTOLERANCE:
      return [...action.data]
    case CLEAR_INTOLERANCE:
      return [...action.data]
    default:
      return state;
  }
};