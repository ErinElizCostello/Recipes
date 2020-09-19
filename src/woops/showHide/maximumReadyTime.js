import React from 'react';
import { useDispatch } from 'react-redux'

import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';

import TimeSliderOn from '../timeSiderOn';

import { deleteMaximumReadyTime } from '../../../actions/maximumReadyTime'



const MaximumReadyTime = () => {

  const dispatch = useDispatch()

  const [checked, setChecked] = React.useState(false);

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  const notChecked = () => {
    dispatch(deleteMaximumReadyTime("Skip"))
  }

  return (
    <div>
      <FormControlLabel
        control={
          <Checkbox
            checked={checked}
            onChange={handleChange}
            name="checked"
            color="primary"
          />
        }
        label="Add a maximum ready time"
      />

      {checked ? <TimeSliderOn /> : notChecked}
    </div>
  )
}

export default MaximumReadyTime