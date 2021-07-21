import React, { useRef, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { useStylesNutritionSliderDialogue } from '../../styles/homePage/nutritionSliderDialogue'

import { showSliderSelectionsInChips } from '../../../state/actions/showSliderSelectionsInChips'

import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import SliderForm from './sliderForm';
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';
import Typography from '@material-ui/core/Typography';
import FastfoodIcon from '@material-ui/icons/Fastfood';

import { sliderInformationNutrition } from '../formLabels/nutritionSliders'


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




// const useStyles = makeStyles((theme) => ({
  // root: {
  //   width: '100%',
  //   height: '100%',
  //   color: '#2e2e2e'
  // },
  // heading: {

  //   fontSize: theme.typography.pxToRem(16),
  //   fontWeight: theme.typography.fontWeightLight,
  // },
  // button: {
  //   display: 'flex',
  //   direction: 'row',
  //   alignItems: 'center',
  //   justifyContent: 'space-between',
  //   width: 140,
  //   height: 56,
  //   backgroundColor: 'white',
  //   color: '#828282',
  //   border: '#c2c2c2 1px solid',
  //   '&:hover': {
  //     border: 'black 1px solid',
  //   },
  //   //  font: theme.typography
  //   // fontSize: theme.typography.pxToRem(16),
  //   // fontWeight: theme.typography.fontWeightLight,
  //   borderRadius: 4
  // },
  // buttonFont: {
  //   // fontWeight: light,
  //   fontSize: theme.typography.pxToRem(16),
  //   fontWeight: theme.typography.fontWeightLight,
  //   marginLeft: 10
  // }
// }));