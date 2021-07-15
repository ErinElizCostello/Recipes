import { SET_MAXIMUM_READY_TIME, DELETE_MAXIMUM_READY_TIME } from '../constants'


export const maximumReadyTime = ( listValues ) => {
  return({
    type: SET_MAXIMUM_READY_TIME,
    data: listValues
  })
}

export const deleteMaximumReadyTime = (listValues) => {
  return({
    type: DELETE_MAXIMUM_READY_TIME,
    data: listValues
  })
}