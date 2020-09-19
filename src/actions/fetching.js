export const FETCH_RECIPE_PENDING = 'FETCH_POKEMON_PENDING';
export const FETCH_RECIPE_SUCCESS = 'FETCH_POKEMON_SUCCESS';
export const FETCH_RECIPE_ERROR = 'FETCH_POKEMON_ERROR';


export const fetchRecipePending = () => {
    return {
        type: FETCH_RECIPE_PENDING
    }
}

export const fetchRecipeSuccess = recipeData => {
    return {
        type: FETCH_RECIPE_SUCCESS,
        data: recipeData
    }
}

export const fetchRecipeError = error => {
    return {
        type: FETCH_RECIPE_ERROR,
        error
    }
}