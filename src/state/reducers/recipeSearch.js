import { RECIPE_SEARCH_PENDING, RECIPE_SEARCH_SUCCESS, RECIPE_SEARCH_ERROR, RECIPE_SEARCH_EMPTY_SEARCH, RECIPE_SEARCH_NO_RESULTS } from '../constants';


const initialState = {
    pending: false,
    data: [],
    error: null,
    emptySearch: false,
    noResults: false
}

export function recipeSearch(state = initialState, action) {
    switch (action.type) {
        case RECIPE_SEARCH_PENDING:
            return {
                ...state,
                pending: true
            }
        case RECIPE_SEARCH_SUCCESS:
            return {
                ...state,
                pending: false,
                data: action.data
            }
        case RECIPE_SEARCH_ERROR:
            return {
                ...state,
                pending: false,
                error: action.error
            }
        case RECIPE_SEARCH_EMPTY_SEARCH:
            return {
                ...state,
                emptySearch: action.data,
            }
        case RECIPE_SEARCH_NO_RESULTS:
            return {
                ...state,
                noResults: action.data
            }
        default:
            return state;
    }
}