import React from 'react';
import { useDispatch } from "react-redux";

import Button from '@material-ui/core/Button';

import { addRecipe } from '../../actions/addRecipes';

import {test } from '../../APIs/API'


const Submit = () => {

  const dispatch = useDispatch()

  const onSubmit = () => {
    dispatch(addRecipe())
  }

  let id = 210327;
  const onSubmitTest = () => {
    test(id)
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

      <Button
        variant="contained"
        color="secondary"
        onClick={() => onSubmitTest()}
      >
        TEST
      </Button>     
    </div>
  )
}

export default Submit