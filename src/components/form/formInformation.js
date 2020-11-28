import { dietTypeList, deleteDiet, clearDiet } from '../../actions/dietType'
import { cuisineList, deleteCuisine, clearCuisine } from '../../actions/cuisines'
import { intolerancesList, deleteIntolerance, clearIntolerances } from '../../actions/intolerances'
import { mealTypeList, deleteMealType, clearMealType } from '../../actions/mealType'

// import { selects, selectsDelete, selectsClear} from '../../woops/actions/selectActions'

import { sliders, 
  slidersDelete 
} from '../../actions/sliderActions'

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
  }
]

export const timeSliderInformation = [
  {
  checkBoxLabel: "Add a maximum ready time",
    actionName: sliders,
    deleteAction: slidersDelete,
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
    actionName: sliders,
    deleteAction: slidersDelete,
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
    actionName: sliders,
    deleteAction: slidersDelete,
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
    actionName: sliders,
    deleteAction: slidersDelete,
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
    actionName: sliders,
    deleteAction: slidersDelete,
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
    actionName: sliders,
    deleteAction: slidersDelete,
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
    actionName: sliders,
    deleteAction: slidersDelete,
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
    actionName: sliders,
    deleteAction: slidersDelete,
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
    actionName: sliders,
    deleteAction: slidersDelete,
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
    actionName: sliders,
    deleteAction: slidersDelete,
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
    actionName: sliders,
    deleteAction: slidersDelete,
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
    actionName: sliders,
    deleteAction: slidersDelete,
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
    actionName: sliders,
    deleteAction: slidersDelete,
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
    actionName: sliders,
    deleteAction: slidersDelete,
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
    actionName: sliders,
    deleteAction: slidersDelete,
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
    actionName: sliders,
    deleteAction: slidersDelete,
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
    actionName: sliders,
    deleteAction: slidersDelete,
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
    actionName: sliders,
    deleteAction: slidersDelete,
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
    actionName: sliders,
    deleteAction: slidersDelete,
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
    actionName: sliders,
    deleteAction: slidersDelete,
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
    actionName: sliders,
    deleteAction: slidersDelete,
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
    actionName: sliders,
    deleteAction: slidersDelete,
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
    actionName: sliders,
    deleteAction: slidersDelete,
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
    actionName: sliders,
    deleteAction: slidersDelete,
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
    actionName: sliders,
    deleteAction: slidersDelete,
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
    actionName: sliders,
    deleteAction: slidersDelete,
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
    actionName: sliders,
    deleteAction: slidersDelete,
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
    actionName: sliders,
    deleteAction: slidersDelete,
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
    actionName: sliders,
    deleteAction: slidersDelete,
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
    actionName: sliders,
    deleteAction: slidersDelete,
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
    actionName: sliders,
    deleteAction: slidersDelete,
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
    actionName: sliders,
    deleteAction: slidersDelete,
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
    actionName: sliders,
    deleteAction: slidersDelete,
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
    actionName: sliders,
    deleteAction: slidersDelete,
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
    actionName: sliders,
    deleteAction: slidersDelete,
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
    actionName: sliders,
    deleteAction: slidersDelete,
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
    actionName: sliders,
    deleteAction: slidersDelete,
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
// ------

// export const sliderInformation = [
//   {
//     checkBoxLabel: "Alcohol",
//     actionName: sliders,
//     deleteAction: slidersDelete,
//     sliderLabel: 'Grams of Alcohol',
//     marks: [
//       {
//         value: 0,
//         label: '0'
//       },
//       {
//         value: 100,
//         label: '100'
//       }
//     ],
//     minimum: 0,
//     maximum: 100
//   },
//   {
//     checkBoxLabel: "Caffeine",
//     actionName: sliders,
//     deleteAction: slidersDelete,
//     sliderLabel: 'Milligrams of Caffeine',
//     marks: [
//       {
//         value: 0,
//         label: '0'
//       },
//       {
//         value: 100,
//         label: '100'
//       }
//     ],
//     minimum: 0,
//     maximum: 100
//   },
//   {
//     checkBoxLabel: "Calcium",
//     actionName: sliders,
//     deleteAction: slidersDelete,
//     sliderLabel: 'Milligrams of Calcium',
//     marks: [
//       {
//         value: 0,
//         label: '0'
//       },
//       {
//         value: 100,
//         label: '100'
//       }
//     ],
//     minimum: 0,
//     maximum: 100
//   },
//   {
//     checkBoxLabel: "Calories",
//     actionName: sliders,
//     deleteAction: slidersDelete,
//     sliderLabel: 'Number of calories',
//     marks: [
//       {
//         value: 0,
//         label: '0'
//       },
//       {
//         value: 3500,
//         label: '3500'
//       }
//     ],
//     minimum: 0,
//     maximum: 3500
//   },
//   {
//     checkBoxLabel: "Carbs",
//     actionName: sliders,
//     deleteAction: slidersDelete,
//     sliderLabel: 'Grams of Carbs',
//     marks: [
//       {
//         value: 0,
//         label: '0'
//       },
//       {
//         value: 325,
//         label: '325'
//       }
//     ],
//     minimum: 0,
//     maximum: 325
//   },
//   {
//     checkBoxLabel: "Cholesterol",
//     actionName: sliders,
//     deleteAction: slidersDelete,
//     sliderLabel: 'Milligrams of Cholesterol',
//     marks: [
//       {
//         value: 0,
//         label: '0'
//       },
//       {
//         value: 100,
//         label: '100'
//       }
//     ],
//     minimum: 0,
//     maximum: 100
//   },
//   {
//     checkBoxLabel: "Choline",
//     actionName: sliders,
//     deleteAction: slidersDelete,
//     sliderLabel: 'Milligrams of Choline',
//     marks: [
//       {
//         value: 0,
//         label: '0'
//       },
//       {
//         value: 100,
//         label: '100'
//       }
//     ],
//     minimum: 0,
//     maximum: 100
//   },
//   {
//     checkBoxLabel: "Copper",
//     actionName: sliders,
//     deleteAction: slidersDelete,
//     sliderLabel: 'Milligrams of Copper',
//     marks: [
//       {
//         value: 0,
//         label: '0'
//       },
//       {
//         value: 100,
//         label: '100'
//       }
//     ],
//     minimum: 0,
//     maximum: 100
//   },
//   {
//     checkBoxLabel: "Fat",
//     actionName: sliders,
//     deleteAction: slidersDelete,
//     sliderLabel: 'Grams of Fat',
//     marks: [
//       {
//         value: 0,
//         label: '0'
//       },
//       {
//         value: 100,
//         label: '100'
//       }
//     ],
//     minimum: 0,
//     maximum: 100
//   },
//   {
//     checkBoxLabel: "Fiber",
//     actionName: sliders,
//     deleteAction: slidersDelete,
//     sliderLabel: 'Grams of Fiber',
//     marks: [
//       {
//         value: 0,
//         label: '0'
//       },
//       {
//         value: 40,
//         label: '40'
//       }
//     ],
//     minimum: 0,
//     maximum: 40
//   },
//   {
//     checkBoxLabel: "Fluoride",
//     actionName: sliders,
//     deleteAction: slidersDelete,
//     sliderLabel: 'Milligrams of Fluoride',
//     marks: [
//       {
//         value: 0,
//         label: '0'
//       },
//       {
//         value: 100,
//         label: '100'
//       }
//     ],
//     minimum: 0,
//     maximum: 100
//   },
//   {
//     checkBoxLabel: "Folate",
//     actionName: sliders,
//     deleteAction: slidersDelete,
//     sliderLabel: 'Grams of Folate',
//     marks: [
//       {
//         value: 0,
//         label: '0'
//       },
//       {
//         value: 100,
//         label: '100'
//       }
//     ],
//     minimum: 0,
//     maximum: 100
//   },
//   {
//     checkBoxLabel: "Folic Acid",
//     actionName: sliders,
//     deleteAction: slidersDelete,
//     sliderLabel: 'Grams of Folic Acid',
//     marks: [
//       {
//         value: 0,
//         label: '0'
//       },
//       {
//         value: 100,
//         label: '100'
//       }
//     ],
//     minimum: 0,
//     maximum: 100
//   },
//   {
//     checkBoxLabel: "Iodine",
//     actionName: sliders,
//     deleteAction: slidersDelete,
//     sliderLabel: 'Grams of Iodine',
//     marks: [
//       {
//         value: 0,
//         label: '0'
//       },
//       {
//         value: 100,
//         label: '100'
//       }
//     ],
//     minimum: 0,
//     maximum: 100
//   },
//   {
//     checkBoxLabel: "Iron",
//     actionName: sliders,
//     deleteAction: slidersDelete,
//     sliderLabel: 'Milligrams of Iron',
//     marks: [
//       {
//         value: 0,
//         label: '0'
//       },
//       {
//         value: 100,
//         label: '100'
//       }
//     ],
//     minimum: 0,
//     maximum: 100
//   },
//   {
//     checkBoxLabel: "Magnesium",
//     actionName: sliders,
//     deleteAction: slidersDelete,
//     sliderLabel: 'Milligrams of Magnesium',
//     marks: [
//       {
//         value: 0,
//         label: '0'
//       },
//       {
//         value: 100,
//         label: '100'
//       }
//     ],
//     minimum: 0,
//     maximum: 100
//   },
//   {
//     checkBoxLabel: "Manganese",
//     actionName: sliders,
//     deleteAction: slidersDelete,
//     sliderLabel: 'Milligrams of Manganese',
//     marks: [
//       {
//         value: 0,
//         label: '0'
//       },
//       {
//         value: 100,
//         label: '100'
//       }
//     ],
//     minimum: 0,
//     maximum: 100
//   },
//   {
//     checkBoxLabel: "Phosphorus",
//     actionName: sliders,
//     deleteAction: slidersDelete,
//     sliderLabel: 'Milligrams of Phosphorus',
//     marks: [
//       {
//         value: 0,
//         label: '0'
//       },
//       {
//         value: 100,
//         label: '100'
//       }
//     ],
//     minimum: 0,
//     maximum: 100
//   },
//   {
//     checkBoxLabel: "Potassium",
//     actionName: sliders,
//     deleteAction: slidersDelete,
//     sliderLabel: 'Milligrams of Potassium',
//     marks: [
//       {
//         value: 0,
//         label: '0'
//       },
//       {
//         value: 100,
//         label: '100'
//       }
//     ],
//     minimum: 0,
//     maximum: 100
//   },
//   {
//     checkBoxLabel: "Protein",
//     actionName: sliders,
//     deleteAction: slidersDelete,
//     sliderLabel: 'Grams of protein',
//     marks: [
//       {
//         value: 0,
//         label: '0'
//       },
//       {
//         value: 120,
//         label: '120'
//       }
//     ],
//     minimum: 0,
//     maximum: 120
//   },
//   {
//     checkBoxLabel: "Saturated Fat",
//     actionName: sliders,
//     deleteAction: slidersDelete,
//     sliderLabel: 'Grams of Saturated Fat',
//     marks: [
//       {
//         value: 0,
//         label: '0'
//       },
//       {
//         value: 100,
//         label: '100'
//       }
//     ],
//     minimum: 0,
//     maximum: 100
//   },
//   {
//     checkBoxLabel: "Selenium",
//     actionName: sliders,
//     deleteAction: slidersDelete,
//     sliderLabel: 'Milligrams of Selenium',
//     marks: [
//       {
//         value: 0,
//         label: '0'
//       },
//       {
//         value: 100,
//         label: '100'
//       }
//     ],
//     minimum: 0,
//     maximum: 100
//   },
//   {
//     checkBoxLabel: "Sodium",
//     actionName: sliders,
//     deleteAction: slidersDelete,
//     sliderLabel: 'Milligrams of Sodium',
//     marks: [
//       {
//         value: 0,
//         label: '0'
//       },
//       {
//         value: 100,
//         label: '100'
//       }
//     ],
//     minimum: 0,
//     maximum: 100
//   },
//   {
//     checkBoxLabel: "Sugar",
//     actionName: sliders,
//     deleteAction: slidersDelete,
//     sliderLabel: 'Grams of sugar',
//     marks: [
//       {
//         value: 0,
//         label: '0'
//       },
//       {
//         value: 100,
//         label: '100'
//       }
//     ],
//     minimum: 0,
//     maximum: 120
//   },
//   {
//     checkBoxLabel: "Zinc",
//     actionName: sliders,
//     deleteAction: slidersDelete,
//     sliderLabel: 'Grams of Zinc',
//     marks: [
//       {
//         value: 0,
//         label: '0'
//       },
//       {
//         value: 100,
//         label: '100'
//       }
//     ],
//     minimum: 0,
//     maximum: 120
//   }
// ]

// export const sliderInformationVitamins = [
//   {
//     checkBoxLabel: "Vitamin A",
//     actionName: sliders,
//     deleteAction: slidersDelete,
//     sliderLabel: 'IU of Vitamin A',
//     marks: [
//       {
//         value: 0,
//         label: '0'
//       },
//       {
//         value: 100,
//         label: '100'
//       }
//     ],
//     minimum: 0,
//     maximum: 100
//   },
//   {
//     checkBoxLabel: "Vitamin C",
//     actionName: sliders,
//     deleteAction: slidersDelete,
//     sliderLabel: 'Milligrams of Vitamin C',
//     marks: [
//       {
//         value: 0,
//         label: '0'
//       },
//       {
//         value: 100,
//         label: '100'
//       }
//     ],
//     minimum: 0,
//     maximum: 100
//   },
//   {
//     checkBoxLabel: "Vitamin D",
//     actionName: sliders,
//     deleteAction: slidersDelete,
//     sliderLabel: 'Micrograms of Vitamin D',
//     marks: [
//       {
//         value: 0,
//         label: '0'
//       },
//       {
//         value: 100,
//         label: '100'
//       }
//     ],
//     minimum: 0,
//     maximum: 100
//   },
//   {
//     checkBoxLabel: "Vitamin E",
//     actionName: sliders,
//     deleteAction: slidersDelete,
//     sliderLabel: 'Milligrams of Vitamin E',
//     marks: [
//       {
//         value: 0,
//         label: '0'
//       },
//       {
//         value: 100,
//         label: '100'
//       }
//     ],
//     minimum: 0,
//     maximum: 100
//   },
//   {
//     checkBoxLabel: "Vitamin K",
//     actionName: sliders,
//     deleteAction: slidersDelete,
//     sliderLabel: 'Micrograms of Vitamin K',
//     marks: [
//       {
//         value: 0,
//         label: '0'
//       },
//       {
//         value: 100,
//         label: '100'
//       }
//     ],
//     minimum: 0,
//     maximum: 100
//   },
//   {
//     checkBoxLabel: "Vitamin B1",
//     actionName: sliders,
//     deleteAction: slidersDelete,
//     sliderLabel: 'Milligrams of Vitamin B1',
//     marks: [
//       {
//         value: 0,
//         label: '0'
//       },
//       {
//         value: 100,
//         label: '100'
//       }
//     ],
//     minimum: 0,
//     maximum: 100
//   },
//   {
//     checkBoxLabel: "Vitamin B2",
//     actionName: sliders,
//     deleteAction: slidersDelete,
//     sliderLabel: 'Milligrams of Vitamin B2',
//     marks: [
//       {
//         value: 0,
//         label: '0'
//       },
//       {
//         value: 100,
//         label: '100'
//       }
//     ],
//     minimum: 0,
//     maximum: 100
//   },
//   {
//     checkBoxLabel: "Vitamin B3",
//     actionName: sliders,
//     deleteAction: slidersDelete,
//     sliderLabel: 'Milligrams of Vitamin B3',
//     marks: [
//       {
//         value: 0,
//         label: '0'
//       },
//       {
//         value: 100,
//         label: '100'
//       }
//     ],
//     minimum: 0,
//     maximum: 100
//   },
//   {
//     checkBoxLabel: "Vitamin B5",
//     actionName: sliders,
//     deleteAction: slidersDelete,
//     sliderLabel: 'Milligrams of Vitamin B5',
//     marks: [
//       {
//         value: 0,
//         label: '0'
//       },
//       {
//         value: 100,
//         label: '100'
//       }
//     ],
//     minimum: 0,
//     maximum: 100
//   },
//   {
//     checkBoxLabel: "Vitamin B6",
//     actionName: sliders,
//     deleteAction: slidersDelete,
//     sliderLabel: 'Milligrams of Vitamin B6',
//     marks: [
//       {
//         value: 0,
//         label: '0'
//       },
//       {
//         value: 100,
//         label: '100'
//       }
//     ],
//     minimum: 0,
//     maximum: 100
//   },
//   {
//     checkBoxLabel: "Vitamin B12",
//     actionName: sliders,
//     deleteAction: slidersDelete,
//     sliderLabel: 'Milligrams of Vitamin B12',
//     marks: [
//       {
//         value: 0,
//         label: '0'
//       },
//       {
//         value: 100,
//         label: '100'
//       }
//     ],
//     minimum: 0,
//     maximum: 100
//   }
// ]





// import { alcohol, deleteAlcohol, caffeine, deleteCaffeine, calories, deleteCalories, carbs, deleteCarbs, copper, deleteCopper, calcium, deleteCalcium, choline, deleteCholine, cholesterol, deleteCholesterol, fat, deleteFat, fiber, deleteFiber, fluoride, deletefluoride, saturatedFat, deleteSaturatedFat, folate, deleteFolate, folicAcid, deleteFolicAcid, iodine, deleteIodine, iron, deleteIron, magnesium, deleteMagnesium, manganese, deleteManganese, phosphorus, deletePhosphorus, potassium, deletePotassium, protein, deleteProtein, selenium, deleteSelenium, sodium, deleteSodium, sugar, deleteSugar, zinc, deleteZinc, vitaminA, deleteVitaminA, vitaminC, deleteVitaminC, vitaminD, deleteVitaminD, vitaminE, deleteVitaminE, vitaminK, deleteVitaminK, vitaminB1, deleteVitaminB1, vitaminB2, deleteVitaminB2, vitaminB3, deleteVitaminB3, vitaminB5, deleteVitaminB5, vitaminB6, deleteVitaminB6, vitaminB12, deleteVitaminB12 } from '../../actions/sliderActions'
