import { SET_GENERAL_SEARCH } from '../constants'


export const generalSearch = (state = [], action) => {
  switch (action.type) {
    case SET_GENERAL_SEARCH:
      return action.data;
    default:
      return state;
  }
};