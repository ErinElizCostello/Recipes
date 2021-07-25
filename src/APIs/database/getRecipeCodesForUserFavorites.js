export const getRecipeCodesForUserFavorites = (userID) => {
  return fetch('https://reallyhungrytwo.herokuapp.com/getFavorites',
    {
      method: 'POST',
      body: JSON.stringify({ id: userID }),
      headers: { 'Content-Type': 'application/json' }
    }
  ).then(response => response.json())
}