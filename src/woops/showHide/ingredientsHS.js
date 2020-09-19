import React, { useState } from 'react';
import { useDispatch } from 'react-redux'

import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';

import Ingredients from '../ingredients';

import { theList } from '../../../actions/list'
import { toggleList } from '../../../actions/list'
import Intolerances from '../intolerances';



const IngredientsHS = () => {

  const dispatch = useDispatch()

  const [checked, setChecked] = useState(false);

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  const notChecked = () => {
    dispatch(toggleList("Skip"))
  }

  const automaticDisp = () => {
    dispatch(toggleList("Skip"))
  }

  return (
    <div>
      <FormControlLabel
        control={
          <Checkbox
            checked={checked}
            onChange={handleChange}
            name="checked"
            color="secondary"
          />
        }
        label="Ingredients to include"
      />

      {checked ? <Ingredients /> : notChecked()}
      {checked ? automaticDisp() : null}
    </div>
  )
}

export default IngredientsHS