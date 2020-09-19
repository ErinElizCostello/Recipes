import { calories, deleteCalories } from '../../actions/calories';
import { carbs, deleteCarbs } from '../../actions/carbs';
import { fiber, deleteFiber } from '../../actions/fiber';
import { protein, deleteProtein } from '../../actions/protein'
import { sugar, deleteSugar } from '../../actions/sugar'
import { dietTypeList, deleteDiet, clearDiet } from '../../actions/dietType'
import { cuisineList, deleteCuisine, clearCuisine } from '../../actions/cuisines'
import { intolerancesList, deleteIntolerance, clearIntolerances } from '../../actions/intolerances'
import { mealTypeList, deleteMealType, clearMealType } from '../../actions/mealType'

const zeDietTypes = 'theDietTypes'

export const selectInformation = [
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
        'Eastern European', 'European', 'French', 'German', 'Greek','Japanese', 'Jewish', 'Korean', 'Latin American', 'Mediterranean', 'Thai', 'Vietnamese']
    }
  },
  {
    stuff: {
      label: 'Intolerances',
      actions: { add: intolerancesList, delete: deleteIntolerance, clear: clearIntolerances },
      reducerName: 'c',
      menuItem: [
        'Dairy', 'Egg', 'Gluten', 'Grain', 'Peanut', 'Seafood', 'Sesame','Shellfish', 'Soy', 'Sulfite', 'Tree Nut','Wheat']
    }
  },
  {
    stuff: {
      label: 'Meal Type',
      actions: { add: mealTypeList, delete: deleteMealType, clear: clearMealType },
      reducerName: 'd',
      menuItem: ['main course', 'side dish', 'dessert', 'appetizer', 'salad', 'bread', 'breakfast', 'soup', 'beverage', 'sauce','marinade', 'fingerfood', 'snack', 'drink']
    }
  }
]


export const sliderInformation = [
  {
    checkBoxLabel: "Calories",
    actionName: calories,
    deleteAction: deleteCalories,
    sliderLabel: 'Number of calories',
    marks: [
      {
        value: 0,
        label: '0'
      },
      {
        value: 3500,
        label: '3500'
      }
    ],
    minimum: 0,
    maximum: 3500
  },
  {
    checkBoxLabel: "Carbs",
    actionName: carbs,
    deleteAction: deleteCarbs,
    sliderLabel: 'Grams of Carbs',
    marks: [
      {
        value: 0,
        label: '0'
      },
      {
        value: 325,
        label: '325'
      }
    ],
    minimum: 0,
    maximum: 325
  },
  {
    checkBoxLabel: "Fiber",
    actionName: fiber,
    deleteAction: deleteFiber,
    sliderLabel: 'Grams of Fiber',
    marks: [
      {
        value: 0,
        label: '0'
      },
      {
        value: 40,
        label: '40'
      }
    ],
    minimum: 0,
    maximum: 40
  },
  {
    checkBoxLabel: "Protein",
    actionName: protein,
    deleteAction: deleteProtein,
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
  },
  {
    checkBoxLabel: "Sugar",
    actionName: sugar,
    deleteAction: deleteSugar,
    sliderLabel: 'Grams of sugar',
    marks: [
      {
        value: 0,
        label: '0'
      },
      {
        value: 100,
        label: '100'
      }
    ],
    minimum: 0,
    maximum: 120
  }
]