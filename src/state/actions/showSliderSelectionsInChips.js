import { SET_SHOW_SLIDER_SELECTIONS_IN_CHIPS } from '../constants'

export const showSliderSelectionsInChips = ( boolean ) => {
  return({
    type: SET_SHOW_SLIDER_SELECTIONS_IN_CHIPS,
    data: boolean
  })
}