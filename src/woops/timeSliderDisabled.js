import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux'

import { makeStyles } from '@material-ui/core/styles';
import Slider from '@material-ui/core/Slider';
import Typography from '@material-ui/core/Typography';

import { deleteMaximumReadyTime } from '../actions/maximumReadyTime'


const TimeSliderDisabled = () => {
  
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(deleteMaximumReadyTime("Skip"))
  })

  return []
}

export default TimeSliderDisabled

{/* <Typography id="discrete-slider-always" gutterBottom>

      </Typography>
      <Slider
        defaultValue={15}
        getAriaValueText={valuetext}
        aria-labelledby="discrete-slider-always"
        step={1}
        marks={marks}
        valueLabelDisplay="on"
        min={15}
        max={60}
        disabled
      /> */}