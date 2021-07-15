import Button from '@material-ui/core/Button';
import React from 'react';
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom';

//actions
import { recipeID } from '../../state/actions/recipeID'


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