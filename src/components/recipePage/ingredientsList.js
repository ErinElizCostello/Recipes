import React from 'react';

import { convertDecimalToFraction } from './convertDecimalToFraction'

import { useStylesIngredientsList } from '../styles/recipePage/ingredientsList'
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import Typography from '@material-ui/core/Typography';


const IngredientsList = (props) => {
  const classes = useStylesIngredientsList();

  const recipe = props.recipeInformation.nutrition
  const numberOfServings = props.recipeInformation.servings

  return (
    <div className={classes.ingredients}>
      <List component="nav" aria-labelledby="Ingredients">
        <Typography>
          Ingredients
        </Typography>
          {recipe && recipe.ingredients.map(item =>
            <ListItem className={classes.listItemSpacing} key={Math.random()}>
              <ListItemIcon>
                <FiberManualRecordIcon className={classes.icon} />
              </ListItemIcon>
              <ListItemText primary={`${convertDecimalToFraction(item.amount, numberOfServings)} ${item.unit} ${item.name}`} />
            </ListItem>
          )}
     </List>
    </div>
  )
}

export default IngredientsList