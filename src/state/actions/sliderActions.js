import store from '../../store'
import { SET_SLIDERS, DELETE_SLIDERS } from '../constants'


let theData = {}

export const sliders = (listValues, label) => dispatch => {

  theData[label] = { min: listValues[0], max: listValues[1] }

  dispatch({
    type: SET_SLIDERS,
    data: theData
  })
}

export const slidersDelete = label => {
  console.log('label', label)

  const state = store.getState()
  let sliderObj = state.sliders

  delete sliderObj[label]

  return ({
    type: DELETE_SLIDERS,
    data: sliderObj
  })
}