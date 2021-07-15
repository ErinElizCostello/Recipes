import { AUTOCOMPLETE_PENDING, AUTOCOMPLETE_SUCCESS, AUTOCOMPLETE_ERROR } from '../constants'


const initialState = {
    pending: false,
    data: [],
    error: null
}

export function AutoCompleteIngredients(state = initialState, action) {
    switch (action.type) {
        case AUTOCOMPLETE_PENDING:
            return {
                ...state,
                pending: true
            }
        case AUTOCOMPLETE_SUCCESS:
            return {
                ...state,
                pending: false,
                data: action.data
            }
        case AUTOCOMPLETE_ERROR:
            return {
                ...state,
                pending: false,
                error: action.error
            }
        default:
            return state;
    }
}