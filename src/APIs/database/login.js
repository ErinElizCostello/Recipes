export const login = (username, password) => {
  return fetch('https://reallyhungry.herokuapp.com/login', {
    method: 'POST',
    mode: "cors",
    body: JSON.stringify({
      username: username,
      password: password
    }),
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    }
  })
    .then(response => response.json())
}