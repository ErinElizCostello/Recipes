export const adminInformation = () => {
  return fetch('http://https://reallyhungry.herokuapp.com/admin')
  .then(response => response.json())
}