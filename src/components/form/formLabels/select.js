///All of the form information and labels for the select component


import {maximumReadyTime, deleteMaximumReadyTime} from '../../../state/actions/maximumReadyTime'
import { dietTypeList, deleteDiet, clearDiet } from '../../../state/actions/dietType'
import { cuisineList, deleteCuisine, clearCuisine } from '../../../state/actions/cuisines'
import { intolerancesList, deleteIntolerance, clearIntolerances } from '../../../state/actions/intolerances'
import { mealTypeList, deleteMealType, clearMealType } from '../../../state/actions/mealType'


export const selectInformation = [
  {
    stuff: {
      label: 'Minutes',
      actions: { add: maximumReadyTime, delete: deleteMaximumReadyTime, clear: null },
      reducerName: 'e',
      menuItem: ['15', '30', '45', '60']
    }
  },
  {
    stuff: {
      label: 'Meal Type',
      actions: { add: mealTypeList, delete: deleteMealType, clear: clearMealType },
      reducerName: 'd',
      menuItem: ['main course', 'side dish', 'dessert', 'appetizer', 'salad', 'bread', 'breakfast', 'soup', 'beverage', 'sauce', 'marinade', 'fingerfood', 'snack', 'drink']
    }
  },
  {
    stuff: {
      label: 'Diet Type',
      actions: { add: dietTypeList, delete: deleteDiet, clear: clearDiet },
      reducerName: 'a',
      menuItem: ['Gluten Free', 'Ketogenic', 'Vegetarian', 'Lacto-Vegetarian', 'Ovo-Vegetarian', 'Vegan', 'Pescetarian', 'Paleo', 'Primal', 'Whole30']
    }
  },
  {
    stuff: {
      label: 'Cuisines',
      actions: { add: cuisineList, delete: deleteCuisine, clear: clearCuisine },
      reducerName: 'b',
      menuItem: [
        'African', 'American', 'British', 'Cajun', 'Caribbean', 'Chinese',
        'Eastern European', 'European', 'French', 'German', 'Greek', 'Indian', 'Irish', 'Italian', 'Japanese', 'Jewish', 'Korean', 'Latin American', 'Mediterranean', 'Mexican', 'Middle Eastern', 'Nordic', 'Southern', 'Spanish', 'Thai', 'Vietnamese']
    }
  },
  {
    stuff: {
      label: 'Intolerances',
      actions: { add: intolerancesList, delete: deleteIntolerance, clear: clearIntolerances },
      reducerName: 'c',
      menuItem: [
        'Dairy', 'Egg', 'Gluten', 'Grain', 'Peanut', 'Seafood', 'Sesame', 'Shellfish', 'Soy', 'Sulfite', 'Tree Nut', 'Wheat']
    }
  }
]