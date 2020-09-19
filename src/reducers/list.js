export const theList = (state = [], action) => {
  switch (action.type) {
    case 'SET_LIST':
      return [...state, action.data];
    case 'DELETE_ITEM':
      return [...action.data]
    case 'CLEAR_LIST':
      return [...action.data]
    case 'TOGGLE_LIST':
      return action.data
    default:
      return state;
  }
};