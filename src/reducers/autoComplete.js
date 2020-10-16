const initialState = {
    pending: false,
    data: [],
    error: null
}


export function ACReducer(state = initialState, action) {
    switch (action.type) {
        case 'FETCH_AC_PENDING':
            return {
                ...state,
                pending: true
            }
        case 'FETCH_AC_SUCCESS':
            return {
                ...state,
                pending: false,
                data: action.data
            }
        case 'FETCH_AC_ERROR':
            return {
                ...state,
                pending: false,
                error: action.error
            }
        default:
            return state;
    }
}