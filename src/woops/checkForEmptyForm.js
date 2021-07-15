export const checkForEmptyForm = ( isItEmpty ) => {
  return({
    type: 'CHECK_FOR_EMPTY_FORM',
    data: isItEmpty
  })
}