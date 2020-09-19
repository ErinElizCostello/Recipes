export const calories = (state = [], action) => {
  switch (action.type) {
    case 'SET_CALORIES':
      return action.data;
    case 'DELETE_CALORIES':
      return action.data
    default:
      return state;
  }
};