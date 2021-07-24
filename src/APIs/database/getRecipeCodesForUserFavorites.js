export const getRecipeCodesForUserFavorites = (userID) => {
  return fetch('https://reallyhungry.herokuapp.com/getFavorites',
    {
      method: 'POST',
      body: JSON.stringify({ id: userID }),
      headers: { 'Content-Type': 'application/json' }
    }
  ).then(response => response.json())
}