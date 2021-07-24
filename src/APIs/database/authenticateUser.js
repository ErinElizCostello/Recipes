export const authenticateUser = (token) => {
  return fetch(`http://https://reallyhungry.herokuapp.com/checkUser`, {
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