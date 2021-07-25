export const adminInformation = () => {
  return fetch('http://reallyhungrytwo.herokuapp.com/admin')
  .then(response => response.json())
}