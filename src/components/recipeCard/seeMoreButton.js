import React from 'react';
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom';

import { recipeID } from '../../state/actions/recipeID'

import Button from '@material-ui/core/Button';


const SeeMoreButton = (props) => {
  
  const dispatch = useDispatch()
  
  const recipeIDForAPI = props.recipeInfo.recipe.id

  const goToRecipeInfo = () => {
    dispatch(recipeID(recipeIDForAPI))
    localStorage.setItem('id', recipeIDForAPI)
  }

  return (
    <Link to={`/recipePage/${recipeIDForAPI}`}>
      <Button size="small" color="primary" onClick={() => goToRecipeInfo()}>
        See More
        </Button>
    </Link>
  )
}

export default SeeMoreButton