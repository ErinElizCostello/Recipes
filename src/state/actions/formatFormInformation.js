import { recipeSearchPending, recipeSearchSuccess, recipeSearchError, recipeSearchEmptySearch, recipeSearchNoResults } from './recipeSearch.js';
import { searchRecipes } from '../../APIs/spoonacular/searchRecipes'
import store from '../../store'


export const formatFormInformation = (theState) => dispatch => {

  // Starts spinner
  dispatch(recipeSearchPending());

  // Retrieves form information from state
  const state = store.getState();
  const generalSearch = state.generalSearch
  const ingredients = state.ingredientsList
  const dietTypes = state.dietTypes
  const cuisines = state.cuisines
  const intolerances = state.intolerances
  const mealType = state.mealType
  const sliders = state.sliders;
  const maximumReadyTime = state.maximumReadyTime

  // Formats the form information for the Spoonacular API
  let formInformation = '';

  // General Search
  generalSearch.length !== 0 ?
    formInformation += `&query=${generalSearch.item.toLowerCase()}`
    :
    formInformation += '';

  // Ingredients
  let ingredient = ''

  ingredients.forEach(theIngredient => {
    ingredients.indexOf(theIngredient) === ingredients.length - 1 ?
      ingredient += theIngredient.theItem
      :
      ingredient += theIngredient.theItem + ','
  })

  ingredients.length !== 0
    ?
    formInformation += `&includeIngredients=${ingredient}`
    :
    formInformation += '';

  // Maximum ready time
  maximumReadyTime.length !== 0 ?
    formInformation += `&maxReadyTime=${maximumReadyTime.theItem}`
    :
    formInformation += '';

  // Diet Types
  dietTypes.length !== 0
    ?
    formInformation += `&diet=${dietTypes.theItem.toLowerCase()}`
    :
    formInformation += '';

  // Meal Type
  mealType.length !== 0
    ?
    formInformation += `&type=${mealType.theItem.toLowerCase()}`
    :
    formInformation += '';

  // Cuisines
  let cuisine = ''

  cuisines.forEach(theCuisine => {
    cuisines.indexOf(theCuisine) === cuisines.length - 1 ?
      cuisine += theCuisine.theItem
      :
      cuisine += theCuisine.theItem + ','
  })

  cuisines.length !== 0
    ?
    formInformation += `&cuisine=${cuisine.toLowerCase()}`
    :
    formInformation += '';

  // Intolerances
  let intolerance = ''

  intolerances.forEach(theIntolerance => {
    intolerances.indexOf(theIntolerance) === intolerances.length - 1 ?
      intolerance += theIntolerance.theItem
      :
      intolerance += theIntolerance.theItem + ','
  })

  intolerances.length !== 0
    ?
    formInformation += `&intolerances=${intolerance.toLowerCase()}`
    :
    formInformation += '';

  // All of the sliders for both Nutrition and Vitamins
  let slider = ''

  Object.keys(sliders).forEach(sliderInfo => {
    sliders !== {} && sliderInfo !== "Add a maximum ready time" ?
      slider += `&min${sliderInfo[0].toUpperCase() + sliderInfo.slice(1)}=${sliders[sliderInfo].min}&max${sliderInfo[0].toUpperCase() + sliderInfo.slice(1)}=${sliders[sliderInfo].max} `
      :
      slider += ''
  })

  let removesSpacesFromSliders = slider.split('').filter(char => char !== ' ').join('')

  formInformation += removesSpacesFromSliders

  //use the form information to search recipes from spoonacular API
  searchRecipes(formInformation)
  .then(res => {
    if (!res.ok) {
      throw new Error(' Recipes could not be fetched')
    }
    return res.json()
  })
  .then(recipes => {
    dispatch(recipeSearchError(null))
    dispatch(recipeSearchSuccess(recipes.results))

    if(!recipes.totalResults) {
      dispatch(recipeSearchNoResults(true))
    } else {
      dispatch(recipeSearchNoResults(false))
    }

    if (formInformation === '') {
      dispatch(recipeSearchEmptySearch(true))
    } else {
      dispatch(recipeSearchEmptySearch(false))
    }
  })
    .catch(error => {
      dispatch(recipeSearchError(error.message))
    })
}