import React, { useEffect, useRef } from 'react';

import NutritionTable from './nutritionTable'

import { useStylesNutritionDialogue } from '../styles/recipePage/nutritionDialogue'
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';


const NutritionDialogue = (props) => {
  const classes = useStylesNutritionDialogue();

  const nutritionInformation = props.recipeInformation.nutrition

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => () => setOpen(true);

  const handleClose = () => setOpen(false);

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
    <div className={classes.seeNutritionButtonSpacing}>

      <Button className={classes.seeNutritionButton} onClick={handleClickOpen()}>
        Nutrition Information
      </Button>
      
      <Dialog
        open={open}
        onClose={handleClose}
        scroll={'paper'}
        aria-labelledby="scroll-dialog-title"
        aria-describedby="scroll-dialog-description"
      >
        <DialogTitle id="scroll-dialog-title">Nutrition</DialogTitle>
        <DialogContent dividers='paper'>
          <DialogContentText
            id="scroll-dialog-description"
            ref={descriptionElementRef}
            tabIndex={-1}
          >
            <NutritionTable nutritionInformation={nutritionInformation} />         
          </DialogContentText>
        </DialogContent>
      </Dialog>
      
    </div>
  );
}

export default NutritionDialogue