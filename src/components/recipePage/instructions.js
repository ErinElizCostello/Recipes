import React from 'react';

import { useStylesInstructions } from '../styles/recipePage/instructions'
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';


const Instructions = (props) => {
  const classes = useStylesInstructions()

  const instructions = props.recipeInformation.analyzedInstructions[0].steps

  return (
    <div className={classes.instructionsGeneral}>
      <List component="nav" aria-label="Ingredients">
        <div className={classes.spacer} />
        {
          instructions && instructions.map(step =>
            <ListItem key={Math.random()}>
              <ListItemText primary={`${step.number + '.'} ${step.step}`} />
            </ListItem>
          )
        }
      </List >
    </div >
  )
}

export default Instructions