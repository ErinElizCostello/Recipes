export const signUp = (username, password) => {
  return fetch('http://localhost:3001/signUp', {
    method: 'POST',
    mode: 'cors',
    body: JSON.stringify({
      username: username, 
      password: password
    }),
    headers: {
      'Content-Type': 'application/json'
    }
  })
}