import React from 'react';
import { useStylesSeeRecipeHereButton } from '../styles/recipePage/seeRecipeHereButton'

import Button from '@material-ui/core/Button';


const SeeRecipeHereButton = (props) => {
  const classes = useStylesSeeRecipeHereButton()

  const sourceUrl = props.recipeInformation.sourceUrl

  return (
    <div className={classes.seeRecipeHereButtonSpacing}>
      <Button variant="contained" className={classes.seeRecipeHereButton} href={sourceUrl} target="_blank">
        See Recipe
      </Button>
    </div>
  );
}

export default SeeRecipeHereButton;