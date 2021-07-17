import { SET_SHOW_SLIDER_SELECTIONS_IN_CHIPS } from '../constants'


export const showSliderSelectionsInChips = (state = false, action) => {
  switch (action.type) {
    case SET_SHOW_SLIDER_SELECTIONS_IN_CHIPS:
      return action.data
    default:
      return state;
  }
};