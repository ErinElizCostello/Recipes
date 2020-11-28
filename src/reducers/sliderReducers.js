const initialState = {
      //   Alcohol: { min: [], max: []} ,
      //   Caffeine: { min: [], max: [] },
      //   Calories: {min: [], max: [] },
      //   Carbs: {min: [], max: [] },
      //   Copper: {min: [], max: [] },
      //   Calcium: {min: [], max: [] },
      //   Choline: {min: [], max: [] },
      //   Cholesterol: {min: [], max: [] },
      //   Fat: {min: [], max: [] },
      //   Fiber: {min: [], max: [] },
      //   Fluoride: {min: [], max: [] },
      //   SaturatedFat: {min: [], max: [] },
      //   Folate: {min: [], max: [] },
      //   FolicAcid: {min: [], max: [] },
      //   Iodine: {min: [], max: [] },
      //   Iron: {min: [], max: [] },
      //   Magnesium: {min: [], max: [] },
      //   Manganese: {min: [], max: [] },
      //   Phosphorus: {min: [], max: [] },
      //   Potassium: {min: [], max: [] },
      //   Protein: {min: [], max: [] },
      //   Selenium: {min: [], max: [] },
      //   Sodium: {min: [], max: [] },
      //   Sugar: {min: [], max: [] },
      //   Zinc: {min: [], max: [] },
      //   VitaminA: {min: [], max: [] },
      //   VitaminC: {min: [], max: [] },
      //   VitaminD: {min: [], max: [] },
      //   VitaminE: {min: [], max: [] },
      //   VitaminK: {min: [], max: [] },
      //   VitaminB1: {min: [], max: [] },
      //   VitaminB2: {min: [], max: [] },
      //   VitaminB3: {min: [], max: [] },
      //   VitaminB5: {min: [], max: [] },
      //   VitaminB6: {min: [], max: [] },
      //   VitaminB1: { min: [], max: [] }
}

export const sliders = (state = {}, action) => {
   
   switch (action.type) {
      case 'SET_SLIDERS':
         return action.data     
      case 'DELETE_SLIDERS':
         return action.data
      default:
         return state;
   }
};

// export const alcohol = (state = [], action) => {
//    switch (action.type) {
//       case 'SET_ALCOHOL':
//          return action.data;
//       case 'DELETE_ALCOHOL':
//          return action.data
//       default:
//          return state;
//    }
// };



// export const caffeine = (state = [], action) => {
//    switch (action.type) {
//       case 'SET_CAFFEINE':
//          return action.data;
//       case 'DELETE_CAFFEINE':
//          return action.data
//       default:
//          return state;
//    }
// };



// export const calories = (state = [], action) => {
//    switch (action.type) {
//       case 'SET_CALORIES':
//          return action.data;
//       case 'DELETE_CALORIES':
//          return action.data
//       default:
//          return state;
//    }
// };



// export const carbs = (state = [], action) => {
//    switch (action.type) {
//       case 'SET_CARBS':
//          return action.data;
//       case 'DELETE_CARBS':
//          return action.data
//       default:
//          return state;
//    }
// };



// export const copper = (state = [], action) => {
//    switch (action.type) {
//       case 'SET_COPPER':
//          return action.data;
//       case 'DELETE_COPPER':
//          return action.data
//       default:
//          return state;
//    }
// };



// export const calcium = (state = [], action) => {
//    switch (action.type) {
//       case 'SET_CALCIUM':
//          return action.data;
//       case 'DELETE_CALCIUM':
//          return action.data
//       default:
//          return state;
//    }
// };



// export const choline = (state = [], action) => {
//    switch (action.type) {
//       case 'SET_CHOLINE':
//          return action.data;
//       case 'DELETE_CHOLINE':
//          return action.data
//       default:
//          return state;
//    }
// };



// export const cholesterol = (state = [], action) => {
//    switch (action.type) {
//       case 'SET_CHOLESTEROL':
//          return action.data;
//       case 'DELETE_CHOLESTEROL':
//          return action.data
//       default:
//          return state;
//    }
// };



// export const fat = (state = [], action) => {
//    switch (action.type) {
//       case 'SET_FAT':
//          return action.data;
//       case 'DELETE_FAT':
//          return action.data
//       default:
//          return state;
//    }
// };



// export const fiber = (state = [], action) => {
//    switch (action.type) {
//       case 'SET_FIBER':
//          return action.data;
//       case 'DELETE_FIBER':
//          return action.data
//       default:
//          return state;
//    }
// };



// export const fluoride = (state = [], action) => {
//    switch (action.type) {
//       case 'SET_FLUORIDE':
//          return action.data;
//       case 'DELETE_FLUORIDE':
//          return action.data
//       default:
//          return state;
//    }
// };



// export const saturatedFat = (state = [], action) => {
//    switch (action.type) {
//       case 'SET_SATURATED_FAT':
//          return action.data;
//       case 'DELETE_SATURATED_FAT':
//          return action.data
//       default:
//          return state;
//    }
// };



// export const folate = (state = [], action) => {
//    switch (action.type) {
//       case 'SET_FOLATE':
//          return action.data;
//       case 'DELETE_FOLATE':
//          return action.data
//       default:
//          return state;
//    }
// };



// export const folicAcid = (state = [], action) => {
//    switch (action.type) {
//       case 'SET_FOLIC_ACID':
//          return action.data;
//       case 'DELETE_FOLIC_ACID':
//          return action.data
//       default:
//          return state;
//    }
// };



// export const iodine = (state = [], action) => {
//    switch (action.type) {
//       case 'SET_IODINE':
//          return action.data;
//       case 'DELETE_IODINE':
//          return action.data
//       default:
//          return state;
//    }
// };



// export const iron = (state = [], action) => {
//    switch (action.type) {
//       case 'SET_IRON':
//          return action.data;
//       case 'DELETE_IRON':
//          return action.data
//       default:
//          return state;
//    }
// };



// export const magnesium = (state = [], action) => {
//    switch (action.type) {
//       case 'SET_MAGNESIUM':
//          return action.data;
//       case 'DELETE_MAGNESIUM':
//          return action.data
//       default:
//          return state;
//    }
// };



// export const manganese = (state = [], action) => {
//    switch (action.type) {
//       case 'SET_MANGANESE':
//          return action.data;
//       case 'DELETE_MANGANESE':
//          return action.data
//       default:
//          return state;
//    }
// };



// export const phosphorus = (state = [], action) => {
//    switch (action.type) {
//       case 'SET_PHOSPHORUS':
//          return action.data;
//       case 'DELETE_PHOSPHORUS':
//          return action.data
//       default:
//          return state;
//    }
// };



// export const potassium = (state = [], action) => {
//    switch (action.type) {
//       case 'SET_POTASSIUM':
//          return action.data;
//       case 'DELETE_POTASSIUM':
//          return action.data
//       default:
//          return state;
//    }
// };



// export const protein = (state = [], action) => {
//    switch (action.type) {
//       case 'SET_PROTEIN':
//          return action.data;
//       case 'DELETE_PROTEIN':
//          return action.data
//       default:
//          return state;
//    }
// };



// export const selenium = (state = [], action) => {
//    switch (action.type) {
//       case 'SET_SELENIUM':
//          return action.data;
//       case 'DELETE_SELENIUM':
//          return action.data
//       default:
//          return state;
//    }
// };



// export const sodium = (state = [], action) => {
//    switch (action.type) {
//       case 'SET_SODIUM':
//          return action.data;
//       case 'DELETE_SODIUM':
//          return action.data
//       default:
//          return state;
//    }
// };



// export const sugar = (state = [], action) => {
//    switch (action.type) {
//       case 'SET_SUGAR':
//          return action.data;
//       case 'DELETE_SUGAR':
//          return action.data
//       default:
//          return state;
//    }
// };



// export const zinc = (state = [], action) => {
//    switch (action.type) {
//       case 'SET_ZINC':
//          return action.data;
//       case 'DELETE_ZINC':
//          return action.data
//       default:
//          return state;
//    }
// };



// export const vitaminA = (state = [], action) => {
//    switch (action.type) {
//       case 'SET_VITAMIN_A':
//          return action.data;
//       case 'DELETE_VITAMIN_A':
//          return action.data
//       default:
//          return state;
//    }
// };



// export const vitaminC = (state = [], action) => {
//    switch (action.type) {
//       case 'SET_VITAMIN_C':
//          return action.data;
//       case 'DELETE_VITAMIN_C':
//          return action.data
//       default:
//          return state;
//    }
// };



// export const vitaminD = (state = [], action) => {
//    switch (action.type) {
//       case 'SET_VITAMIN_D':
//          return action.data;
//       case 'DELETE_VITAMIN_D':
//          return action.data
//       default:
//          return state;
//    }
// };



// export const vitaminE = (state = [], action) => {
//    switch (action.type) {
//       case 'SET_VITAMIN_E':
//          return action.data;
//       case 'DELETE_VITAMIN_E':
//          return action.data
//       default:
//          return state;
//    }
// };



// export const vitaminK = (state = [], action) => {
//    switch (action.type) {
//       case 'SET_VITAMIN_K':
//          return action.data;
//       case 'DELETE_VITAMIN_K':
//          return action.data
//       default:
//          return state;
//    }
// };



// export const vitaminB1 = (state = [], action) => {
//    switch (action.type) {
//       case 'SET_VITAMIN_B1':
//          return action.data;
//       case 'DELETE_VITAMIN_B1':
//          return action.data
//       default:
//          return state;
//    }
// };



// export const vitaminB2 = (state = [], action) => {
//    switch (action.type) {
//       case 'SET_VITAMIN_B2':
//          return action.data;
//       case 'DELETE_VITAMIN_B2':
//          return action.data
//       default:
//          return state;
//    }
// };



// export const vitaminB3 = (state = [], action) => {
//    switch (action.type) {
//       case 'SET_VITAMIN_B3':
//          return action.data;
//       case 'DELETE_VITAMIN_B3':
//          return action.data
//       default:
//          return state;
//    }
// };



// export const vitaminB5 = (state = [], action) => {
//    switch (action.type) {
//       case 'SET_VITAMIN_B5':
//          return action.data;
//       case 'DELETE_VITAMIN_B5':
//          return action.data
//       default:
//          return state;
//    }
// };



// export const vitaminB6 = (state = [], action) => {
//    switch (action.type) {
//       case 'SET_VITAMIN_B6':
//          return action.data;
//       case 'DELETE_VITAMIN_B6':
//          return action.data
//       default:
//          return state;
//    }
// };



// export const vitaminB12 = (state = [], action) => {
//    switch (action.type) {
//       case 'SET_VITAMIN_B12':
//          return action.data;
//       case 'DELETE_VITAMIN_B12':
//          return action.data
//       default:
//          return state;
//    }
// };