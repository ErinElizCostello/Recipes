export const carbs = (state = [], action) => {
  switch (action.type) {
    case 'SET_CARBS':
      return action.data;
    case 'DELETE_CARBS':
      return action.data
    default:
      return state;
  }
};