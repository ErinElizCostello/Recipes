// import { calories, deleteCalories } from '../../actions/calories';
// import { carbs, deleteCarbs } from '../../actions/carbs';
// import { fiber, deleteFiber } from '../../actions/fiber';
// import { protein, deleteProtein } from '../../actions/protein'
// import { sugar, deleteSugar } from '../../actions/sugar'
import { dietTypeList, deleteDiet, clearDiet } from '../../actions/dietType'
import { cuisineList, deleteCuisine, clearCuisine } from '../../actions/cuisines'
import { intolerancesList, deleteIntolerance, clearIntolerances } from '../../actions/intolerances'
import { mealTypeList, deleteMealType, clearMealType } from '../../actions/mealType'

import { alcohol, deleteAlcohol, caffeine, deleteCaffeine, calories, deleteCalories, carbs, deleteCarbs, copper, deleteCopper, calcium, deleteCalcium, choline, deleteCholine, cholesterol, deleteCholesterol, fat, deleteFat, fiber, deleteFiber, fluoride, deletefluoride, saturatedFat, deleteSaturatedFat, folate, deleteFolate, folicAcid, deleteFolicAcid, iodine, deleteIodine, iron, deleteIron, magnesium, deleteMagnesium, manganese, deleteManganese, phosphorus, deletePhosphorus, potassium, deletePotassium, protein, deleteProtein, selenium, deleteSelenium, sodium, deleteSodium, sugar, deleteSugar, zinc, deleteZinc, vitaminA, deleteVitaminA, vitaminC, deleteVitaminC, vitaminD, deleteVitaminD, vitaminE, deleteVitaminE, vitaminK, deleteVitaminK, vitaminB1, deleteVitaminB1, vitaminB2, deleteVitaminB2, vitaminB3, deleteVitaminB3, vitaminB5, deleteVitaminB5, vitaminB6, deleteVitaminB6, vitaminB12, deleteVitaminB12 } from '../../actions/sliderActions'

import { aMaximumReadyTime, deleteMaximumReadyTime } from '../../actions/maximumReadyTime'

// import { numberOfResults, deleteNumberOfResults, clearNumberOf}

const zeDietTypes = 'theDietTypes'

export const ingredientsInformation = [
  {
    stuff: {
      label: 'N/A',
      actions: { add: 'N/A', delete: 'N/A', clear: 'N/A' },
      reducerName: 'N/A',
      menuItem: 'N/A'
    }
  }
]

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
        'Eastern European', 'European', 'French', 'German', 'Greek', 'Japanese', 'Jewish', 'Korean', 'Latin American', 'Mediterranean', 'Thai', 'Vietnamese']
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
  },
  {
    stuff: {
      label: 'Meal Type',
      actions: { add: mealTypeList, delete: deleteMealType, clear: clearMealType },
      reducerName: 'd',
      menuItem: ['main course', 'side dish', 'dessert', 'appetizer', 'salad', 'bread', 'breakfast', 'soup', 'beverage', 'sauce', 'marinade', 'fingerfood', 'snack', 'drink']
    }
  },
  // stuff: {
  //   label: 'How many results would you like to see?',
  //   actions: { add: dietTypeList, delete: deleteDiet, clear: clearDiet },
  //   reducerName: 'a',
  //   menuItem: ['Gluten Free', 'Ketogenic', 'Vegetarian', 'Lacto-Vegetarian', 'Ovo-Vegetarian', 'Vegan', 'Pescetarian', 'Paleo', 'Primal', 'Whole30']
  // }
]

export const timeSliderInformation = [
  {
  checkBoxLabel: "Add a maximum ready time",
    actionName: aMaximumReadyTime,
    deleteAction: deleteMaximumReadyTime,
    sliderLabel: 'Maximum minutes to prepare',
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
]

export const sliderInformation = [
  {
    checkBoxLabel: "Alcohol",
    actionName: alcohol,
    deleteAction: deleteAlcohol,
    sliderLabel: 'Grams of Alcohol',
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
    maximum: 100
  },
  {
    checkBoxLabel: "Caffeine",
    actionName: caffeine,
    deleteAction: deleteCaffeine,
    sliderLabel: 'Milligrams of Caffeine',
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
    maximum: 100
  },
  {
    checkBoxLabel: "Calcium",
    actionName: calcium,
    deleteAction: deleteCalcium,
    sliderLabel: 'Milligrams of Calcium',
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
    maximum: 100
  },
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
    checkBoxLabel: "Cholesterol",
    actionName: cholesterol,
    deleteAction: deleteCholesterol,
    sliderLabel: 'Milligrams of Cholesterol',
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
    maximum: 100
  },
  {
    checkBoxLabel: "Choline",
    actionName: choline,
    deleteAction: deleteCholine,
    sliderLabel: 'Milligrams of Choline',
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
    maximum: 100
  },
  {
    checkBoxLabel: "Copper",
    actionName: copper,
    deleteAction: deleteCopper,
    sliderLabel: 'Milligrams of Copper',
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
    maximum: 100
  },
  {
    checkBoxLabel: "Fat",
    actionName: fat,
    deleteAction: deleteFat,
    sliderLabel: 'Grams of Fat',
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
    maximum: 100
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
    checkBoxLabel: "Fluoride",
    actionName: fluoride,
    deleteAction: deletefluoride,
    sliderLabel: 'Milligrams of Fluoride',
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
    maximum: 100
  },
  {
    checkBoxLabel: "Folate",
    actionName: folate,
    deleteAction: deleteFolate,
    sliderLabel: 'Grams of Folate',
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
    maximum: 100
  },
  {
    checkBoxLabel: "Folic Acid",
    actionName: folicAcid,
    deleteAction: deleteFolicAcid,
    sliderLabel: 'Grams of Folic Acid',
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
    maximum: 100
  },
  {
    checkBoxLabel: "Iodine",
    actionName: iodine,
    deleteAction: deleteIodine,
    sliderLabel: 'Grams of Iodine',
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
    maximum: 100
  },
  {
    checkBoxLabel: "Iron",
    actionName: iron,
    deleteAction: deleteIron,
    sliderLabel: 'Milligrams of Iron',
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
    maximum: 100
  },
  {
    checkBoxLabel: "Magnesium",
    actionName: magnesium,
    deleteAction: deleteMagnesium,
    sliderLabel: 'Milligrams of Magnesium',
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
    maximum: 100
  },
  {
    checkBoxLabel: "Manganese",
    actionName: manganese,
    deleteAction: deleteManganese,
    sliderLabel: 'Milligrams of Manganese',
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
    maximum: 100
  },
  {
    checkBoxLabel: "Phosphorus",
    actionName: phosphorus,
    deleteAction: deletePhosphorus,
    sliderLabel: 'Milligrams of Phosphorus',
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
    maximum: 100
  },
  {
    checkBoxLabel: "Potassium",
    actionName: potassium,
    deleteAction: deletePotassium,
    sliderLabel: 'Milligrams of Potassium',
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
    maximum: 100
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
    checkBoxLabel: "Saturated Fat",
    actionName: saturatedFat,
    deleteAction: deleteSaturatedFat,
    sliderLabel: 'Grams of Saturated Fat',
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
    maximum: 100
  },
  {
    checkBoxLabel: "Selenium",
    actionName: selenium,
    deleteAction: deleteSelenium,
    sliderLabel: 'Milligrams of Selenium',
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
    maximum: 100
  },
  {
    checkBoxLabel: "Sodium",
    actionName: sodium,
    deleteAction: deleteSodium,
    sliderLabel: 'Milligrams of Sodium',
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
    maximum: 100
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
  },
  {
    checkBoxLabel: "Zinc",
    actionName: zinc,
    deleteAction: deleteZinc,
    sliderLabel: 'Grams of Zinc',
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

export const sliderInformationVitamins = [
  {
    checkBoxLabel: "Vitamin A",
    actionName: vitaminA,
    deleteAction: deleteVitaminA,
    sliderLabel: 'IU of Vitamin A',
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
    maximum: 100
  },
  {
    checkBoxLabel: "Vitamin C",
    actionName: vitaminC,
    deleteAction: deleteVitaminC,
    sliderLabel: 'Milligrams of Vitamin C',
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
    maximum: 100
  },
  {
    checkBoxLabel: "Vitamin D",
    actionName: vitaminD,
    deleteAction: deleteVitaminD,
    sliderLabel: 'Micrograms of Vitamin D',
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
    maximum: 100
  },
  {
    checkBoxLabel: "Vitamin E",
    actionName: vitaminE,
    deleteAction: deleteVitaminE,
    sliderLabel: 'Milligrams of Vitamin E',
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
    maximum: 100
  },
  {
    checkBoxLabel: "Vitamin K",
    actionName: vitaminK,
    deleteAction: deleteVitaminK,
    sliderLabel: 'Micrograms of Vitamin K',
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
    maximum: 100
  },
  {
    checkBoxLabel: "Vitamin B1",
    actionName: vitaminB1,
    deleteAction: deleteVitaminB1,
    sliderLabel: 'Milligrams of Vitamin B1',
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
    maximum: 100
  },
  {
    checkBoxLabel: "Vitamin B2",
    actionName: vitaminB2,
    deleteAction: deleteVitaminB2,
    sliderLabel: 'Milligrams of Vitamin B2',
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
    maximum: 100
  },
  {
    checkBoxLabel: "Vitamin B3",
    actionName: vitaminB3,
    deleteAction: deleteVitaminB3,
    sliderLabel: 'Milligrams of Vitamin B3',
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
    maximum: 100
  },
  {
    checkBoxLabel: "Vitamin B5",
    actionName: vitaminB5,
    deleteAction: deleteVitaminB5,
    sliderLabel: 'Milligrams of Vitamin B5',
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
    maximum: 100
  },
  {
    checkBoxLabel: "Vitamin B6",
    actionName: vitaminB6,
    deleteAction: deleteVitaminB6,
    sliderLabel: 'Milligrams of Vitamin B6',
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
    maximum: 100
  },
  {
    checkBoxLabel: "Vitamin B12",
    actionName: vitaminB12,
    deleteAction: deleteVitaminB12,
    sliderLabel: 'Milligrams of Vitamin B12',
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
    maximum: 100
  }
]