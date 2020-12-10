export const recipeID = (state = [], action) => {
  switch (action.type) {
    case 'RECIPE_ID':
      return action.data;
    default:
      return state;
  }
};