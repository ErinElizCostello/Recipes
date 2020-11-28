import store from '../store'

let theData = {}

export const sliders = (listValues, label) => dispatch => {

  theData[label] = { min: listValues[0], max: listValues[1] }

  dispatch({
    type: `SET_SLIDERS`,
    data: theData
  })
}



export const slidersDelete = label => {
  
  const state = store.getState()
  let sliderObj = state.sliders

  delete sliderObj[label]

  return ({
    type: `DELETE_SLIDERS`,
    data: sliderObj
  })

}







  // let keys = Object.keys(theData)
  // let values = Object.values(theData)
  
  // let newArr = []

  // keys.forEach(e => newArr.push({theThing: e, stuff: values[keys.indexOf(e)]}))
  

  // let newNewArr = newArr.filter(e => e.theThing !== label)
  
  // newNewArr.forEach(e => newObj[e.theThing] = e.stuff)