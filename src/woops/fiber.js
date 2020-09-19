import React from 'react';
import { useDispatch } from 'react-redux'

import { makeStyles } from '@material-ui/core/styles';
import Slider from '@material-ui/core/Slider';
import Typography from '@material-ui/core/Typography';

import { fiber } from '../actions/fiber'



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
    value: 40,
    label: '40 grams',
  },
];



const Fiber = () => {

const classes = useStyles();

const dispatch = useDispatch()

const [value, setValue] = React.useState([0, 40]);

const handleChange = (event, newValue) => {
  setValue(newValue);
  
  dispatch(fiber(newValue));
};

  return (
    <div className={classes.root}>
      <Typography id="range-slider" gutterBottom>
        Amount of Fiber
      </Typography>
      <Slider
        value={value}
        onChange={handleChange}
        valueLabelDisplay="on"
        aria-labelledby="range-slider"
        marks={marks}
        min={0}
        max={40}
      />
    </div>
  )
}

export default Fiber