export const favoritesGET = () => {
  return fetch('https://reallyhungrytwo.herokuapp.com/favorites')
      .then(response => response.json())
}


export const favoritesPOST = (userID, APIrecipeID) => {
  return fetch('https://reallyhungrytwo.herokuapp.com/favorites', {
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


export const favoritesDELETE = (APIrecipeID) => {
  return fetch(`https://reallyhungrytwo.herokuapp.com/favorites/${APIrecipeID}`, {
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