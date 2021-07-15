import React from 'react';

import { makeStyles } from '@material-ui/core/styles';

import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography'

const useStyles = makeStyles((theme) => ({
  root: {
    // width: 'fit-content',
    // border: `1px solid ${theme.palette.divider}`,
    // borderRadius: theme.shape.borderRadius,
    // backgroundColor: theme.palette.background.paper,
    // color: theme.palette.text.secondary,
    '& svg': {
      margin: theme.spacing(1.5),
    },
    '& hr': {
      margin: theme.spacing(0, 0.5),
    },
  },
}));


const HeaderInformation = (props) => {

  const classes = useStyles();

  const readyInMinutes = props.recipeInformation.readyInMinutes
  console.log(props.recipeInformation)

  const calories = Math.floor(props.recipeInformation.nutrition.nutrients.filter(nutrient => nutrient.name === "Calories")[0].amount)
  

  return (
    <div className={classes.root}>
      {readyInMinutes} 
      <Divider orientation="vertical" flexItem />
      {calories}
    </div>
  );
}

export default HeaderInformation;