export const cuisines = (state = [], action) => {
  switch (action.type) {
    case 'SET_CUISINE':
      return [...state, action.data];
    case 'DELETE_CUISINE':
      return [...action.data]
    case 'CLEAR_CUISINE':
      return [...action.data]
    default:
      return state;
  }
};