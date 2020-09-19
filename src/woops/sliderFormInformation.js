import { calories } from '../actions/calories'
import { carbs } from '../actions/carbs'
import { fiber } from '../actions/fiber'
import { protein } from '../actions/protein'
import { sugar } from '../actions/sugar'

export const sliderFormInformation = {
  caloriesInfo: {
    actionName: calories,
    sliderLabel: 'Number of Calories',
    marks: [ 
      {
        value: 0,
        label: '0',
      }, 
      {
        value: 3500,
        label: '3500',
      },
    ],
    minimum: 0,
    maximum: 3500
  },
  proteinInfo: {
    actionName: protein,
    sliderLabel: 'Grams of protein',
    marks: [
      {
        value: 0,
        label: '0'
      },
      {
        value: 120,
        label: '120'
      }
    ],
    minimum: 0,
    maximum: 120
  }
}


export const selectFormInformation = {

}