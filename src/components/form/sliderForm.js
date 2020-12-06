import React from 'react';
import { useDispatch } from 'react-redux'

import { makeStyles } from '@material-ui/core/styles';
import Slider from '@material-ui/core/Slider';
import Typography from '@material-ui/core/Typography';
import {sliders, 
  // slidersDelete
} from '../../actions/sliderActions'
import AddIcon from '@material-ui/icons/Add';


const useStyles = makeStyles({
  root: {
    width: 300,
  },
});


const SliderForm = (props) => {

  const classes = useStyles();
  const dispatch = useDispatch()

  // let theAction = props.theInfo.actionName
  let minMax = {min: props.theInfo.minimum, max: props.theInfo.maximum}
  let sliderLabel = props.theInfo.sliderLabel
  let what = props.theInfo.checkBoxLabel
  let marks = props.theInfo.marks

  const [value, setValue] = React.useState([minMax.min, minMax.max]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    
    dispatch(sliders(newValue, what))
    // dispatch(theAction(newValue, sliderLabel));
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