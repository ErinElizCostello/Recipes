import React from 'react';
import { useSelector } from 'react-redux';
import { recipeReducer } from '../reducers/fetching';
import Container from '@material-ui/core/Container';

const RecipeInformation = () => {
  
  let id = useSelector(state => state.recipeID)

  const recipeInfo = useSelector(state => state.recipeReducer.data.filter(recipe => recipe.id === id))
  
  const recipe = recipeInfo[0]

  console.log(recipe)
 return (
   <div>
     <Container maxWidth="sm" >
     <img src={recipe && recipe.image} alt="recipe image"/>
     {recipe && recipe.title}
     <td dangerouslySetInnerHTML={{__html: recipe && recipe.summary}} />
     </Container>
   </div>
 )

}

export default RecipeInformation