export const login = (username, password) => {
  return fetch('http://localhost:3001/login', {
    method: 'POST',
    mode: "cors",
    body: JSON.stringify({
      username: username,
      password: password
    }),
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      // 'Authorization': `JWT ${access}`
    }
  })
    .then(response => response.json())
}