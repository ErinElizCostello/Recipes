export const authenticateUser = (token) => {
  return fetch(`http://reallyhungry.herokuapp.com/checkUser`, {
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