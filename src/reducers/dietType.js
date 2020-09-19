export const theDietTypes = (state = [], action) => {
  switch (action.type) {
    case 'SET_DIETTYPE':
      return [...state, action.data];
    case 'DELETE_DIETTYPE':
      return [...action.data]
    case 'CLEAR_DIETTYPE':
      return [...action.data]
    default:
      return state;
  }
};