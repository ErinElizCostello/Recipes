export const deleteUserAccount = (userId) => {
  return fetch(`http://localhost:3001/deleteUserAccount/${userId}`, {
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