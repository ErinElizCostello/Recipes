import { combineReducers } from 'redux';
import { recipeReducer } from './fetching'
import { theList } from './list'
import { theDietTypes } from './dietType'
import { cuisines } from './cuisines'
import { intolerances } from './intolerances';
import { mealType } from './mealType'
import { maximumReadyTime } from './maximumReadyTime'
// import { protein } from './protein'
// import { carbs } from './carbs'
// import { calories } from './calories'
// import { sugar } from './sugar'
// import { fiber } from './fiber'
import { sliders, alcohol, caffeine, calories, carbs, copper, calcium, choline, cholesterol, fat, fiber, fluoride, saturatedFat, folate, folicAcid, iodine, iron, magnesium, manganese, phosphorus, potassium, protein, selenium, sodium, sugar, zinc, vitaminA, vitaminC, vitaminD, vitaminE, vitaminK, vitaminB1, vitaminB2, vitaminB3, vitaminB5, vitaminB6, vitaminB12 } from './sliderReducers'
import { ACReducer } from './autoComplete'
import {genSearch} from './genSearch'

const rootReducer = combineReducers({
  recipeReducer,
  theList,
  theDietTypes,
  cuisines,
  intolerances,
  mealType,
  maximumReadyTime,
  ACReducer,
  genSearch,
  sliders,
  // protein,
  // carbs,
  // calories,
  // sugar,
  // fiber
  // alcohol, caffeine, calories, carbs, copper, calcium, choline, cholesterol, fat, fiber, fluoride, saturatedFat, folate, folicAcid, iodine, iron, magnesium, manganese, phosphorus, potassium, protein, selenium, sodium, sugar, zinc, vitaminA, vitaminC, vitaminD, vitaminE, vitaminK, vitaminB1, vitaminB2, vitaminB3, vitaminB5, vitaminB6, vitaminB12
});

export default rootReducer