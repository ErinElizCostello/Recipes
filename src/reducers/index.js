import { combineReducers } from 'redux';
import { recipeReducer } from './fetching'
import { theList } from './list'
import { theDietTypes } from './dietType'
import { cuisines } from './cuisines'
import { intolerances } from './intolerances';
import { mealType } from './mealType'
import { maximumReadyTime } from './maximumReadyTime'
import { protein } from './protein'
import { carbs } from './carbs'
import { calories } from './calories'
import { sugar } from './sugar'
import { fiber } from './fiber'

const rootReducer = combineReducers({
  recipeReducer,
  theList,
  theDietTypes,
  cuisines,
  intolerances,
  mealType,
  maximumReadyTime,
  protein,
  carbs,
  calories,
  sugar,
  fiber
});

export default rootReducer