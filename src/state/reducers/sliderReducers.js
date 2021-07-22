import { SET_SLIDERS, DELETE_SLIDERS } from '../constants'


export const sliders = (state = {}, action) => {
   switch (action.type) {
      case SET_SLIDERS:
         return action.data     
      case DELETE_SLIDERS:
         return action.data
      default:
         return state;
   }
};