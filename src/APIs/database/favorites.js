//GET

export const favoritesGET = () => {
  return fetch('http://localhost:3001/favorites')
      .then(response => response.json())
}


//POST
export const favoritesPOST = (userID, APIrecipeID) => {
  return fetch('http://localhost:3001/favorites', {
        method: 'POST',
        body: JSON.stringify({
          user_id: userID,
          recipe_id_api: APIrecipeID
        }),
        headers: {
          'Content-Type': 'application/json',
        }
      })
        .then(response => response.json())
}


//DELETE

export const favoritesDELETE = (APIrecipeID) => {
  return fetch(`http://localhost:3001/favorites/${APIrecipeID}`, {
    mode: "cors",
    method: 'DELETE',
    body: JSON.stringify({
      recipe_id_api: APIrecipeID
    }),
    headers: {
      'Content-Type': 'application/json',
    }
  })
    .then(response => response.json())
}