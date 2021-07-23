//Slider component for both nutrition and vitamin sliders

import React, { useState } from 'react';
import { useDispatch } from 'react-redux'

import { sliders } from '../../../state/actions/sliderActions'

import { useStylesSliderForm } from '../../styles/form/advancedSearch/sliderForm'
import Slider from '@material-ui/core/Slider';
import Typography from '@material-ui/core/Typography';


const SliderForm = (props) => {
  const classes = useStylesSliderForm();

  const dispatch = useDispatch()

  let checkBoxLabel = props.sliderInformation.checkBoxLabel
  let sliderLabel = props.sliderInformation.sliderLabel
  let sliderMarks = props.sliderInformation.marks
  let minMax = {
    min: props.sliderInformation.minimum,
    max: props.sliderInformation.maximum
  }

  const [value, setValue] = useState([minMax.min, minMax.max]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    dispatch(sliders(newValue, checkBoxLabel))
  };

  return (
    <div className={classes.root}>
      <div className={classes.labelSpacing}>
      <Typography id="range-slider" gutterBottom style={{ fontWeight: 'lighter' }}>
        {sliderLabel}
      </Typography>
      </div>
      <Slider
        value={value}
        onChange={handleChange}
        valueLabelDisplay="on"
        aria-labelledby="range-slider"
        marks={sliderMarks}
        min={minMax.min}
        max={minMax.max}
      />
    </div>
  )
}

export default SliderForm