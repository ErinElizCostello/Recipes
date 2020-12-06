// import { fetchRecipePending, fetchRecipeSuccess, fetchRecipeError } from './fetching.js';
import { ingredientsAutocomplete } from '../APIs/API';


export const addAutoComplete = (ingredients) => dispatch => {

  // dispatch(fetchACPending());
  console.log("hellloooooooo")
  return ingredientsAutocomplete(ingredients).then(recipe => {
    if (recipe.error) {
      throw (recipe.error);
    }

    dispatch(fetchACSuccess(recipe));
  })
    .catch(error => {
      console.log(error)
      dispatch(fetchACError(error));
    })

}

export const fetchACPending = () => {
  return {
    type: 'FETCH_AC_PENDING'
  }
}

export const fetchACSuccess = ACData => {
  return {
    type: 'FETCH_AC_SUCCESS',
    data: ACData
  }
}

export const fetchACError = error => {
  return {
    type: 'FETCH_AC_ERROR',
    error
  }
}