export const protein = (state = [], action) => {
  switch (action.type) {
    case 'SET_PROTEIN':
      return action.data;
    case 'DELETE_PROTEIN':
      return action.data
    default:
      return state;
  }
};