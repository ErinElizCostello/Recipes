export const genSearch = (state = [], action) => {
  switch (action.type) {
    case 'SET_GEN_SEARCH':
      return action.data;
    case 'DELETE_GEN_SEARCH_ITEM':
      return action.data
    case 'CLEAR_GEN_SEARCH_LIST':
      return action.data
    case 'TOGGLE_GEN_SEARCH_LIST':
      return action.data
    default:
      return state;
  }
};