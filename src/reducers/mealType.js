export const mealType = (state = [], action) => {
  switch (action.type) {
    case 'SET_MEALTYPE':
      return action.data;
    case 'DELETE_MEALTYPE':
      return action.data;
    case 'CLEAR_MEALTYPE':
      return action.data;
    default:
      return state;
  }
};