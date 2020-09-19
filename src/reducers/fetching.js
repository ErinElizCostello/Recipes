import { FETCH_RECIPE_PENDING, FETCH_RECIPE_SUCCESS, FETCH_RECIPE_ERROR } from '../actions/fetching';


const initialState = {
    pending: false,
    data: [],
    error: null
}


export function recipeReducer(state = initialState, action) {
    switch (action.type) {
        case FETCH_RECIPE_PENDING:
            return {
                ...state,
                pending: true
            }
        case FETCH_RECIPE_SUCCESS:
            return {
                ...state,
                pending: false,
                data: action.data
            }
        case FETCH_RECIPE_ERROR:
            return {
                ...state,
                pending: false,
                error: action.error
            }
        default:
            return state;
    }
}