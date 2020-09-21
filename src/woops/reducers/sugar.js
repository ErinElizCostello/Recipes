export const sugar = (state = [], action) => {
  switch (action.type) {
    case 'SET_SUGAR':
      return action.data;
    case 'DELETE_SUGAR':
      return action.data
    default:
      return state;
  }
};