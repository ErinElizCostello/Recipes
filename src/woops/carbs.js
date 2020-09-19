import React from 'react';
import { useDispatch } from 'react-redux'

import { makeStyles } from '@material-ui/core/styles';
import Slider from '@material-ui/core/Slider';
import Typography from '@material-ui/core/Typography';

import { carbs } from '../actions/carbs'



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
    value: 325,
    label: '325 grams',
  },
];

function valuetext(value) {
  return `${value} grams`;
}



const Carbs = () => {

const classes = useStyles();
const dispatch = useDispatch()

const [value, setValue] = React.useState([0, 325]);
const valueObject = {}

const handleChange = (event, newValue) => {
  setValue(newValue);
  
  dispatch(carbs(newValue));
};

// function valuetext(value) {
  
// }

  return (
    <div className={classes.root}>
      <Typography id="range-slider" gutterBottom>
        Amount of Carbs
      </Typography>
      <Slider
        value={value}
        onChange={handleChange}
        valueLabelDisplay="on"
        aria-labelledby="range-slider"
        getAriaValueText={valuetext}
        marks={marks}
        min={0}
        max={325}
      />
    </div>
  )
}

export default Carbs