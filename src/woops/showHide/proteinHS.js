import React, { useState } from 'react';
import { useDispatch } from 'react-redux'

import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';

import Protein from '../protein';
import SliderForm from '../sliderForm'

import { protein } from '../../../actions/protein'
import { deleteProtein } from '../../../actions/protein'
import { sliderFormInformation } from '../sliderFormInformation'



const ProteinHS = () => {

  const dispatch = useDispatch()
  const info = sliderFormInformation.proteinInfo
  const [checked, setChecked] = useState(false);

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  const notChecked = () => {
    dispatch(deleteProtein("Skip"))
  }

  const automaticDisp = () => {
    dispatch(protein([0, 120]))
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
      label="Protein"
    />

    {checked ? <SliderForm info={info} /> : notChecked()}
    {checked ? automaticDisp() : null}
  </div>
)
}

export default ProteinHS