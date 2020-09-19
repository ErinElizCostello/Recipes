import React from 'react';
import { useDispatch } from 'react-redux'

import { makeStyles } from '@material-ui/core/styles';
import Slider from '@material-ui/core/Slider';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles({
  root: {
    width: 300,
  },
});


const SliderForm = (props) => {

  const classes = useStyles();
  const dispatch = useDispatch()

  let theAction = props.theInfo.actionName
  let minMax = {min: props.theInfo.minimum, max: props.theInfo.maximum}
  let sliderLabel = props.theInfo.sliderLabel
  let marks = props.theInfo.marks

  const [value, setValue] = React.useState([minMax.min, minMax.max]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    console.log(minMax)
    dispatch(theAction(newValue));
  };

  return (
    <div className={classes.root}>
      <Typography id="range-slider" gutterBottom>
        {sliderLabel}
      </Typography>
      <Slider
        value={value}
        onChange={handleChange}
        valueLabelDisplay="on"
        aria-labelledby="range-slider"
        // getAriaValueText={valuetext}
        marks={marks}
        min={minMax.min}
        max={minMax.max}
      />
    </div>
  )
}

export default SliderForm