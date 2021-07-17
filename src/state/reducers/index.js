import { combineReducers } from 'redux';
import { recipeSearch } from './recipeSearch'
import { ingredientsList } from './ingredientsList'
import { dietTypes } from './dietType'
import { cuisines } from './cuisines'
import { intolerances } from './intolerances';
import { mealType } from './mealType'
import { maximumReadyTime } from './maximumReadyTime'
import { sliders } from './sliderReducers'
import { AutoCompleteIngredients } from './autoComplete'
import { generalSearch } from './generalSearch'
import { recipeID } from './recipeID'
import { favoritesCodes } from './favoritesCodes'
import { userFavorites } from './userFavorites'
import { chips } from './chips'
import {showSliderSelectionsInChips} from './showSliderSelectionsInChips'
// import { loggedOutDialogue } from './loggedOutDialogue'


const rootReducer = combineReducers({
  recipeSearch,
  ingredientsList,
  dietTypes,
  cuisines,
  intolerances,
  mealType,
  maximumReadyTime,
  AutoCompleteIngredients,
  generalSearch,
  sliders,
  recipeID,
  favoritesCodes,
  userFavorites,
  chips,
  showSliderSelectionsInChips
  // loggedOutDialogue
});

export default rootReducer