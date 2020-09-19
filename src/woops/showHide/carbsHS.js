import React, { useState } from 'react';
import { useDispatch } from 'react-redux'

import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';

import Carbs from '../carbs';

import { carbs } from '../../../actions/carbs'
import { deleteCarbs } from '../../../actions/carbs'



const CarbsHS = () => {

  const dispatch = useDispatch()

  const [checked, setChecked] = useState(false);

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  const notChecked = () => {
    dispatch(deleteCarbs("Skip"))
  }

  const automaticDisp = () => {
    dispatch(carbs([0, 325]))
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
        label="Carbs"
      />

      {checked ? <Carbs /> : notChecked()}    
      {checked ? automaticDisp() : null}
    </div>
  )
}

export default CarbsHS