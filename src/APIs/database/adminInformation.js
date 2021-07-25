export const adminInformation = () => {
  return fetch('http://reallyhungry.herokuapp.com/admin')
  .then(response => response.json())
}