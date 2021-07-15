import { SET_CHIPS, DELETE_CHIP, CLEAR_CHIPS } from '../constants'


export const chips = (state = [], action) => {
  switch (action.type) {
    case SET_CHIPS:
      return [...state, action.data];
    case DELETE_CHIP:
      return [...action.data]
    case CLEAR_CHIPS:
      return [...action.data]
    default:
      return state;
  }
};