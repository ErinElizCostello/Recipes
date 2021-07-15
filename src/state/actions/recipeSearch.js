import { RECIPE_SEARCH_PENDING, RECIPE_SEARCH_SUCCESS, RECIPE_SEARCH_ERROR, RECIPE_SEARCH_EMPTY_SEARCH, RECIPE_SEARCH_NO_RESULTS } from '../constants';


export const recipeSearchPending = () => {
    return {
        type: RECIPE_SEARCH_PENDING
    }
}

export const recipeSearchSuccess = recipeData => {
    return {
        type: RECIPE_SEARCH_SUCCESS,
        data: recipeData
    }
}

export const recipeSearchError = error => {
    return {
        type: RECIPE_SEARCH_ERROR,
        error
    }
}

export const recipeSearchEmptySearch = (boolean) => {
    return {
        type: RECIPE_SEARCH_EMPTY_SEARCH, 
        data: boolean
    }
}

export const recipeSearchNoResults = (boolean) => {
    return {
        type: RECIPE_SEARCH_NO_RESULTS,
        data: boolean
    }
}