export const authenticateUser = (token) => {
  return fetch(`http://reallyhungrytwo.herokuapp.com/checkUser`, {
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