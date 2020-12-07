import { fetchRecipePending, fetchRecipeSuccess, fetchRecipeError } from './fetching.js';
import { fetchRecipes } from '../APIs/API';
import store from '../store'
// import { recipeReducer } from '../reducers/fetching.js';
// import { ACReducer } from '../reducers/autoComplete.js';


export const addRecipe = () => dispatch => {

  dispatch(fetchRecipePending());

  const state = store.getState();
  const genSearch = state.genSearch
  const ingredients = state.theList
  const theDietTypes = state.theDietTypes
  const cuisines = state.cuisines
  const intolerances = state.intolerances
  const mealType = state.mealType
  const sliders = state.sliders;
  const maxReadyTime = state.maximumReadyTime

  let theInfo = '';

  genSearch.length !== 0 ?
    theInfo += `&query=${genSearch.item.toLowerCase()}`
    :
    theInfo += '';


    let ingreds = ''
    ingredients.forEach(e => {
      ingredients.indexOf(e) === ingredients.length - 1 ?
        ingreds += e.item
        :
        ingreds += e.item + ','
    })
  
    ingredients.length !== 0
      ?
      theInfo += `&includeIngredients=${ingreds}`
      :
      theInfo += '';

  
  maxReadyTime.length !== 0 ?
    theInfo +=`&maxReadyTime=${maxReadyTime}`
  :
    theInfo += '';
  

  theDietTypes.length !== 0
    ?
    // theDietTypes.forEach(e => {
    theInfo += `&diet=${theDietTypes.theItem.toLowerCase()}`
    // })
    :
    theInfo += '';

  mealType.length !== 0
    ?
    // mealType.forEach(e => {
    theInfo += `&type=${mealType.theItem.toLowerCase()}`
    // })
    :
    theInfo += '';

  let cuisi = ''
  cuisines.forEach(e => {
    cuisines.indexOf(e) === cuisines.length - 1 ?
      cuisi += e.theItem
      :
      cuisi += e.theItem + ','
  })

  cuisines.length !== 0
    ?
    theInfo += `&cuisine=${cuisi.toLowerCase()}`
    :
    theInfo += '';

  let intol = ''
  intolerances.forEach(e => {
    intolerances.indexOf(e) === intolerances.length - 1 ?
      intol += e.theItem
      :
      intol += e.theItem + ','
  })

  intolerances.length !== 0
    ?
    theInfo += `&intolerances=${intol.toLowerCase()}`
    :
    theInfo += '';

  let slidezz = ''

  Object.keys(sliders).forEach(e => {
    //  let mini = e.min
    //  let maxi = e.max
    sliders !== {} && e !== "Add a maximum ready time" ?
      slidezz += `&min${e[0].toUpperCase() + e.slice(1)}=${sliders[e].min}&max${e[0].toUpperCase() + e.slice(1)}=${sliders[e].max} `
      :
      slidezz += ''
  })

  let noSpaceSlidezz = slidezz.split('').filter(e => e !== ' ').join('')
  // let theFinalInfo = theInfo
  theInfo += noSpaceSlidezz


  // console.log(theInfo)
  fetchRecipes(theInfo).then(recipe => {
    if (recipe.error) {
      throw (recipe.error);
    }

    console.log(recipe)

    dispatch(fetchRecipeSuccess(recipe.results))
  })
  .catch(error => {
    dispatch(fetchRecipeError(error))
  })
}



// export const addRecipe = () => dispatch => {

//   dispatch(fetchRecipePending());

//   const state = store.getState()

//   let stateKeys = Object.keys(state).map(e => e)
//   let stateValues = Object.values(state).map(e => e)

//   let theState = []
//   let obj = {}
//   let theInfo = ''

//   stateKeys.forEach(e => { 
//     obj[e]= stateValues[stateKeys.indexOf(e)] 
//     let theData = []  
//     theData.push({...stateValues[stateKeys.indexOf(e)]})
//     theState.push({'name': stateKeys[stateKeys.indexOf(e)], 'data': theData})
//   })


//   theState.forEach(e => {

//  JSON.stringify(e.data) !== '{}'
//     ?
//     theInfo += `& min${ e.name[0].toUpperCase() + e.name.slice(1) }=${ e.data.min }& max${ e.name[0].toUpperCase() + e.name.slice(1) }=${ e.data.max } ` 
//     :
//     console.log('nada')
//   })

  // theStateLists.forEach(e => {
  //   e.name === 'genSearch' && JSON.stringify(e.data) !== '{}'
  //   ?
  //   theInfo += `& query=${ e.data.map(e => e + ',') } ` 
  //   :
  //   console.log('nada')
  // })

// console.log(theState)
//   console.log(theInfo)
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
// }




// stateKeys.forEach(e => { 
//   obj[e]= stateValues[stateKeys.indexOf(e)]       
//      e.name === 'theList' 
//   && e.name === 'genSearch'
//   && e.name === 'theDietTypes' 
//   && e.name === 'cuisines' 
//   && e.name === 'intolerances' 
//   && e.name === 'mealType' 
//   && e.name === 'maximumReadyTime'
//   && e.name === 'recipeReducer'
//   && e.name === 'ACReducer'
//   ?
//   theStateSliders.push({'name': stateKeys[stateKeys.indexOf(e)], 'data': [...stateValues[stateKeys.indexOf(e)]
//   ]})
//   :
//   console.log('nah uh')
// })
