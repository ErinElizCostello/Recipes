//the show-hide + button for the nutrition and vitamins sliders

import React, { useState } from 'react';
import { useDispatch } from 'react-redux'

import { sliders, slidersDelete } from '../state/actions/sliderActions'

import SliderForm from '../components/form/sliderForm'

import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import AddIcon from '@material-ui/icons/Add';


const ShowHideSlider = (props) => {

  const dispatch = useDispatch()

  const sliderInformation = props.sliderInformation
  const minimumValue = props.sliderInformation.minimum
  const maximumValue = props.sliderInformation.maximum
  const label = props.sliderInformation.checkBoxLabel

  const [checked, setChecked] = useState(false);

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  const notChecked = () => {
    dispatch(slidersDelete(label))
  }

  const automaticDispatchWhenClicked = () => {
    dispatch(sliders([minimumValue, maximumValue], label))
  }

  return (
    <div>
      <FormControlLabel
        control={
          <Checkbox
            icon={<AddIcon />}
            checkedIcon={<AddIcon />}
            checked={checked}
            onChange={handleChange}
            name="checked"
            color="secondary"
          />
        }
        label={label}
      />
      {checked ? <SliderForm sliderInformation={sliderInformation} /> : notChecked()}
      {checked ? automaticDispatchWhenClicked() : null}
    </div>
  )
}

export default ShowHideSlider