export const deleteUserAccount = (userId) => {
  return fetch(`https://reallyhungrytwo.herokuapp.com/deleteUserAccount/${userId}`, {
    method: 'DELETE',
    mode: "cors",
    body: JSON.stringify({
      user_id: userId
    }),
    headers: {
      'Content-Type': 'application/json',  
    }
  })
}