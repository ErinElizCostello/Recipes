import React, { useState } from 'react';
import { useDispatch } from 'react-redux'

import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';

import Fiber from '../fiber';

import { fiber } from '../../../actions/fiber'
import { deleteFiber } from '../../../actions/fiber'



const FiberHS = () => {

  const dispatch = useDispatch()

  const [checked, setChecked] = useState(false);

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  const notChecked = () => {
    dispatch(deleteFiber("Skip"))
  }

  const automaticDisp = () => {
    dispatch(fiber([0, 40]))
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
        label="Fiber"
      />

      {checked ? <Fiber /> : notChecked()}    
      {checked ? automaticDisp() : null}
    </div>
  )
}

export default FiberHS