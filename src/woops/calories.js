import React from 'react';
import { useDispatch } from 'react-redux'

import { makeStyles } from '@material-ui/core/styles';
import Slider from '@material-ui/core/Slider';
import Typography from '@material-ui/core/Typography';

import { calories } from '../actions/calories'



const useStyles = makeStyles({
  root: {
    width: 300,
  },
});

const marks = [ 
  {
    value: 0,
    label: '0',
  }, 
  {
    value: 3500,
    label: '3500',
  },
];

function valuetext(value) {
  return value;
}



const Calories = () => {

const classes = useStyles();
const dispatch = useDispatch()

const [value, setValue] = React.useState([0, 3500]);
const valueObject = {}

const handleChange = (event, newValue) => {
  setValue(newValue);
  
  dispatch(calories(newValue));
};

// function valuetext(value) {
  
// }

  return (
    <div className={classes.root}>
      <Typography id="range-slider" gutterBottom>
        Number of Calories
      </Typography>
      <Slider
        value={value}
        onChange={handleChange}
        valueLabelDisplay="on"
        aria-labelledby="range-slider"
        getAriaValueText={valuetext}
        marks={marks}
        min={0}
        max={3500}
      />
    </div>
  )
}

export default Calories