import React from 'react';
import { useSelector } from 'react-redux';
import { recipeReducer } from '../reducers/fetching';
import Container from '@material-ui/core/Container';

import IngredientRP from './recipePage/ingredientRP'
import CaloricBreakdownRP from './recipePage/caloricBreakdownRP'
import NutrientsRP from './recipePage/nutrientsRP'
import InstructionRP from './recipePage/instructionRP'
import Button from '@material-ui/core/Button';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';

import { saveFavorite } from '../APIs/API'

const RecipeInformation = () => {

  let id = useSelector(state => state.recipeID)

  const recipeInfo = useSelector(state => state.recipeReducer.data.filter(recipe => recipe.id === id))

  const recipe = recipeInfo[0]

  const onClick = () => {
    saveFavorite(recipe.id)
  }

  console.log(recipe)
  return (
    <div>
      <Container maxWidth="sm" >
        <img src={recipe && recipe.image} alt="recipe image" /><br /><br />

        {recipe && recipe.title}<br /><br />

        <Button size="small" color="primary" onClick={()=> onClick()}>
              <FavoriteBorderIcon />
            </Button>

        <br /><br />

        Preparation Time: {recipe && recipe.preparationMinute} minutes
        Cooking Time: {recipe && recipe.cookingMinutes} minutes
        Total Ready Time: {recipe && recipe.readyInMinutes} minutes

        <br /><br />

        <td dangerouslySetInnerHTML={{ __html: recipe && recipe.summary }} /><br /><br />

        <br /><br />
        Caloric Breakdown: 
<br />
          Protein: {recipe && recipe.nutrition.caloricBreakdown.percentProtein}%<br />
          Fat: {recipe && recipe.nutrition.caloricBreakdown.percentFat}%<br />
          Carbs: {recipe && recipe.nutrition.caloricBreakdown.percentCarbs}%<br />

        <br /><br />

        {recipe && recipe.nutrition.nutrients.map(item => <NutrientsRP nutr={item} />)}

        <br /><br />

        Number of Servings:
        {recipe && recipe.servings}

        <br /><br />

        <h3>Ingredients:</h3><br />

        <ul>
          {recipe && recipe.nutrition.ingredients.map(item => <li><IngredientRP ingred={item} /></li>)}
        </ul>

        <br /><br />

        <h3>Instructions:</h3><br />

        <ul>
          {recipe && recipe.analyzedInstructions[0].steps.map(step => <li><InstructionRP step={step} /></li>)}
        </ul>

        {recipe && recipe.sourceUrl}<br /><br />
      </Container>
    </div>
  )

}

export default RecipeInformation