import { RECIPE_ID } from '../constants'


export const recipeID = ( id ) => {
  return({
    type: RECIPE_ID,
    data: id
  })
}