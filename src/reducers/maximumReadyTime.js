export const maximumReadyTime = (state = [], action) => {
  switch (action.type) {
    case 'SET_MAXIMUMREADYTIME':
      return action.data;
    case 'DELETE_MAXIMUMREADYTIME':
      return action.data
    default:
      return state;
  }
};