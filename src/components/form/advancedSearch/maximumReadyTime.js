import React from 'react';
import { useDispatch } from 'react-redux'

import { maximumReadyTime } from '../../../state/actions/maximumReadyTime'

import { useStylesMaximumReadyTime } from '../../styles/homePage/maximumReadyTime'
import Slider from '@material-ui/core/Slider';
import Typography from '@material-ui/core/Typography';


const marks = [
  {
    value: 15,
    label: '15 mn',
  },
  {
    value: 60,
    label: '1 hour',
  },
  {
    value: 120,
    label: '2 hours',
  },
];


const MaximumReadyTime = () => {

  const classes = useStylesMaximumReadyTime();
  const dispatch = useDispatch()

  const valuetext = (value) => {
    dispatch(maximumReadyTime(value))
  }

  return (
    <div className={classes.root}>
      <Typography id="discrete-slider-always" gutterBottom>
        How much time do you have?
      </Typography>
      <Slider
        defaultValue={15}
        getAriaValueText={valuetext}
        aria-labelledby="discrete-slider-always"
        step={1}
        marks={marks}
        valueLabelDisplay="on"
        min={15}
        max={120}
      />
    </div>
  )
}

export default MaximumReadyTime