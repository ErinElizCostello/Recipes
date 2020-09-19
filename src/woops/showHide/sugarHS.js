import React, { useState } from 'react';
import { useDispatch } from 'react-redux'

import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';

import Sugar from '../sugar';

import { sugar } from '../../../actions/sugar'
import { deleteSugar } from '../../../actions/sugar'



const SugarHS = () => {

  const dispatch = useDispatch()

  const [checked, setChecked] = useState(false);

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  const notChecked = () => {
    dispatch(deleteSugar("Skip"))
  }

  const automaticDisp = () => {
    dispatch(sugar([0, 120]))
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
        label="Sugar"
      />

      {checked ? <Sugar /> : notChecked()}    
      {checked ? automaticDisp() : null}
    </div>
  )
}

export default SugarHS