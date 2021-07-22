import React, { useRef, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { showSliderSelectionsInChips } from '../../../state/actions/showSliderSelectionsInChips'

import { sliderInformationNutrition } from '../formLabels/nutritionSliders'

import SliderForm from './sliderForm';

import { useStylesNutritionSliderDialogue } from '../../styles/homePage/nutritionSliderDialogue'
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Typography from '@material-ui/core/Typography';
import FastfoodIcon from '@material-ui/icons/Fastfood';


const NutritionSliderDialog = () => {
  const classes = useStylesNutritionSliderDialogue()

  const dispatch = useDispatch()

  const [open, setOpen] = React.useState(false);
  const [scroll, setScroll] = React.useState('paper');

  const label = () => <Typography className={classes.buttonFont}>
    Nutrition
  </Typography>

  const handleClickOpen = (scrollType) => () => {
    setOpen(true);
    setScroll(scrollType);
  };

  const handleClose = () => {
    dispatch(showSliderSelectionsInChips('x'))
    setOpen(false);
  };

  const descriptionElementRef = useRef(null);

  useEffect(() => {
    if (open) {
      const { current: descriptionElement } = descriptionElementRef;
      if (descriptionElement !== null) {
        descriptionElement.focus();
      }
    }
  }, [open]);

  return (
    <div>

      <button onClick={handleClickOpen('paper')}
        className={classes.button}>
        {label()}
        <FastfoodIcon />
        <div className={classes.nutritionButtonIconSpacing}></div>
      </button>

      <Dialog
        className={classes.root}
        open={open}
        onClose={handleClose}
        scroll={scroll}
        aria-labelledby="scroll-dialog-title"
        aria-describedby="scroll-dialog-description"
      >
        
        <DialogTitle id="scroll-dialog-title">Nutrition Options</DialogTitle>
        
        <DialogContent dividers={scroll === 'paper'}>
          <DialogContentText
            id="scroll-dialog-description"
            ref={descriptionElementRef}
            tabIndex={-1}
          >
            {sliderInformationNutrition.map(nutritionSlider =>
              <div key={Math.random()} className={classes.sliderForm}><SliderForm sliderInformation={nutritionSlider} /></div>)}
          </DialogContentText>
        </DialogContent>

        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Apply
          </Button>
        </DialogActions>

      </Dialog>
    </div>
  );
}

export default NutritionSliderDialog