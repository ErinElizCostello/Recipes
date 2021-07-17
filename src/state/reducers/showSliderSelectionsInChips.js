import { SET_SHOW_SLIDER_SELECTIONS_IN_CHIPS } from '../constants'


export const showSliderSelectionsInChips = (state = [], action) => {
  switch (action.type) {
    case SET_SHOW_SLIDER_SELECTIONS_IN_CHIPS:
      return [...state, action.data]
    default:
      return state;
  }
};