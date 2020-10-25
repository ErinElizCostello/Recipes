import { fetchRecipePending, fetchRecipeSuccess, fetchRecipeError } from './fetching.js';
import { fetchRecipe } from '../APIs/API';
import store from '../store'
import { recipeReducer } from '../reducers/fetching.js';
import { ACReducer } from '../reducers/autoComplete.js';


export const addRecipe = () => dispatch => {

  dispatch(fetchRecipePending());

  const state = store.getState()
  
  let stateKeys = Object.keys(state).map(e => e)
  let stateValues = Object.values(state).map(e => e)
  
  let theState = []
  let obj = {}

  stateKeys.forEach(e => { 
    // obj[e]= stateValues[stateKeys.indexOf(e)]
    theState.push({'name': stateKeys[stateKeys.indexOf(e)], 'data': {...stateValues[stateKeys.indexOf(e)]}})
    // obj = {}
  })

 let theInfo = ''

  theState.forEach(e => {
    // let theData

    // Object.keys(e.data).length === 0 ? e.data = theData : theData === 0


    e.name !== 'recipeReducer' && e.name !== 'ACReducer' && e.name !== 'theList' && e.name !== 'theDietTypes' && e.name !== 'cuisines' && e.name !== 'intolerances' && e.name !== 'mealType' && e.name !== 'maximumReadyTime' && JSON.stringify(e.data) !== '{}'
    ?
    theInfo += `min${e.name[0].toUpperCase() + e.name.slice(1)}=${e.data.min}&max${e.name[0].toUpperCase() + e.name.slice(1)}=${e.data.max}&` 
    :
    console.log('in progress my babes')
    
  })

  
  // let info = 
    

  theInfo[-1] === '&' ? theInfo.slice(0, theInfo.length) : theInfo
  

  console.log(theInfo)
  // let mhm = state.map(e => e)
  // console.log(mhm)
  // const ingredientsList = ingredients.map(e => !ingredients[-1] ? e += ',+' : e)

  // fetchRecipe(ingredientsList).then(recipe => {
  //   if (recipe.error) {
  //     throw (recipe.error);
  //   }

  //   let recipeInfo = []

  //   recipe.map(e => {
  //     const eachRecipe = {
  //       image: e.image,
  //       title: e.title,
  //       usedIngredients: e.usedIngredients.map(item => item.name),
  //       unusedIngredients: e.unusedIngredients.map(item => item.name)
  //     }
  //     recipeInfo.push(eachRecipe)
  //   })

  //   dispatch(fetchRecipeSuccess(recipeInfo));
  // })
  //   .catch(error => {
  //     dispatch(fetchRecipeError(error));
  //   })
}

