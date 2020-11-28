import React, { useState } from 'react';
import { useDispatch } from 'react-redux'

import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';

import SliderForm from './sliderForm'
import TimeSlider from './timeSlider'
import {sliders, slidersDelete} from '../../actions/sliderActions'


const ShowHideSlider = (props) => {

  const dispatch = useDispatch()

  const info = props.e
  const theAction = props.e.actionName
  const deleteAction = props.e.deleteAction
  const minimumValue = props.e.minimum
  const maximumValue = props.e.maximum
  const label = props.e.checkBoxLabel


  const [checked, setChecked] = useState(false);

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  const notChecked = () => {
    dispatch(slidersDelete(label))
    // dispatch(deleteAction([]))
  }

  const automaticDisp = () => {
    dispatch(sliders([minimumValue, maximumValue], label))
    // dispatch(theAction([minimumValue, maximumValue]))
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
        label={label}
      />
      {checked && label === "Add a maximum ready time" ? <TimeSlider /> :
        checked ? <SliderForm theInfo={info} /> : notChecked()}
      {checked ? automaticDisp() : null}
    </div>
  )
}

export default ShowHideSlider