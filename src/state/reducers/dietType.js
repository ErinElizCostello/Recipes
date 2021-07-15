import { SET_DIET_TYPE, DELETE_DIET_TYPE, CLEAR_DIET_TYPE } from '../constants'


export const dietTypes = (state = [], action) => {
  switch (action.type) {
    case SET_DIET_TYPE:
      return action.data;
    case DELETE_DIET_TYPE:
      return action.data
    case CLEAR_DIET_TYPE:
      return action.data
    default:
      return state;
  }
};