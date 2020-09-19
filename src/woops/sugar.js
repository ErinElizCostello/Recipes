import React from 'react';
import { useDispatch } from 'react-redux'

import { makeStyles } from '@material-ui/core/styles';
import Slider from '@material-ui/core/Slider';
import Typography from '@material-ui/core/Typography';

import { sugar } from '../actions/sugar'



const useStyles = makeStyles({
  root: {
    width: 300,
  },
});

const marks = [ 
  {
    value: 0,
    label: '0 grams',
  }, 
  {
    value: 100,
    label: '100 grams',
  },
];



const Sugar = () => {

const classes = useStyles();
const dispatch = useDispatch()

const [value, setValue] = React.useState([0, 100]);

const handleChange = (event, newValue) => {
  setValue(newValue);
  
  dispatch(sugar(newValue));
};



  return (
    <div className={classes.root}>
      <Typography id="range-slider" gutterBottom>
        Amount of Sugar
      </Typography>
      <Slider
        value={value}
        onChange={handleChange}
        valueLabelDisplay="on"
        aria-labelledby="range-slider"
        // getAriaValueText={valuetext}
        marks={marks}
        min={0}
        max={100}
      />
    </div>
  )
}

export default Sugar