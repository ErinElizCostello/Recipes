export const checkForEmptyForm = (state = true, action) => {
  switch (action.type) {
    case 'CHECK_FOR_EMPTY_FORM':
      return action.data;
    default:
      return state;
  }
};