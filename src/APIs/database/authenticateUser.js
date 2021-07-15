export const authenticateUser = (token) => {
  return fetch(`http://localhost:3001/checkUser`, {
    headers: {
      "Authorization": `bearer ${token}`
    }
  })
    .then(response => {
      if (response.status === 401) {
        localStorage.removeItem('User')
      }
    })
}