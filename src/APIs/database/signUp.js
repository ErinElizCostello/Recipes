export const signUp = (username, password) => {
  return fetch('https://reallyhungrytwo.herokuapp.com/signUp', {
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