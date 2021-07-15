import React from 'react';
import { useSelector } from 'react-redux';

import CardInformation from './cardInformation'
import SeeMoreButton from './seeMoreButton'
import LikeFavoriteRecipe from '../likeFavoriteRecipe/likeFavoriteRecipe'

import { useStylesRecipeCard } from '../styles/recipeCard/recipeCard'
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';


const RecipeCard = (props) => {
  const classes = useStylesRecipeCard();

  let id = useSelector(state => state.recipeID)
  localStorage.setItem('id', JSON.stringify(id))
  let state = useSelector(state => state)
  localStorage.setItem('state', JSON.stringify(state))


  return (
    <div>
      <Card className={classes.root}>
        <CardInformation className={classes.action} cardInfo={props} />
        <CardActions>
          <LikeFavoriteRecipe recipeInfo={props} />
          <SeeMoreButton recipeInfo={props} />
        </CardActions>
      </Card>
    </div>
  )
}

export default RecipeCard