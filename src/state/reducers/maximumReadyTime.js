import { SET_MAXIMUM_READY_TIME, DELETE_MAXIMUM_READY_TIME } from '../constants'


export const maximumReadyTime = (state = [], action) => {
  switch (action.type) {
    case SET_MAXIMUM_READY_TIME:
      return action.data;
    case DELETE_MAXIMUM_READY_TIME:
      return action.data
    default:
      return state;
  }
};