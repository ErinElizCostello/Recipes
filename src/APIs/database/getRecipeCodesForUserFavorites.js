export const getRecipeCodesForUserFavorites = (userID) => {
  return fetch('http://localhost:3001/getFavorites',
    {
      method: 'POST',
      body: JSON.stringify({ id: userID }),
      headers: { 'Content-Type': 'application/json' }
    }
  ).then(response => response.json())
}