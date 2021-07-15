export const adminInformation = () => {
  return fetch('http://localhost:3001/admin')
  .then(response => response.json())
}