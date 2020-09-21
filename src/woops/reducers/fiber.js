export const fiber = (state = [], action) => {
  switch (action.type) {
    case 'SET_FIBER':
      return action.data;
    case 'DELETE_FIBER':
      return action.data
    default:
      return state;
  }
};