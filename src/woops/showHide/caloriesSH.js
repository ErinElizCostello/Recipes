import React, { useState } from 'react';
import { useDispatch } from 'react-redux'

import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';

import Calories from '../calories';
import SliderForm from '../sliderForm'

import { calories } from '../../../actions/calories'
import { deleteCalories } from '../../../actions/calories'
import { sliderFormInformation } from '../sliderFormInformation'




const CaloriesHS = () => {

  const dispatch = useDispatch()
  const info = sliderFormInformation.caloriesInfo

  const [checked, setChecked] = useState(false);

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  const notChecked = () => {
    dispatch(deleteCalories("Skip"))
  }

  const automaticDisp = () => {
    dispatch(calories([0, 3500]))
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
        label="Calories"
      />

      {checked ? <SliderForm info={info} /> : notChecked()}
      {checked ? automaticDisp() : null}
    </div>
  )
}

export default CaloriesHS