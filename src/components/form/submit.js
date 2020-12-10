import React from 'react';
import { useDispatch } from "react-redux";

import Button from '@material-ui/core/Button';

import { addRecipe } from '../../actions/addRecipes';


const Submit = () => {

  const dispatch = useDispatch()

  const onSubmit = () => {
    dispatch(addRecipe())
  }

  return (
    <div> 
      <Button
        variant="contained"
        color="secondary"
        onClick={() => onSubmit()}
      >
        Find recipes!
      </Button>     
    </div>
  )
}

export default Submit