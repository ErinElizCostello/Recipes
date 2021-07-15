import React from 'react';

import { useStylesInstructions } from '../styles/recipePage/instructions'
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';


const InstructionsHeader = (props) => {
  const classes = useStylesInstructions()

  const preparationMinutes = props.recipeInformation.preparationMinutes
  const cookingMinutes = props.recipeInformation.cookingMinutes
  const servings = props.recipeInformation.servings

  return (
    <div className={classes.instructionsHeader}>
      <Grid
        container
        direction='row'
        alignItems='center'
      >
        <Grid item xs={12} sm={4}>
          <div>
            <Typography variant='h5' className={classes.instructionsTitle}>
              Instructions
                </Typography>
          </div>
        </Grid>
        <Grid item xs={3} sm={2}>
          <div>
            <Typography className={classes.basicDescription}>
              {`Servings: ${servings}`}
            </Typography>
          </div>
        </Grid>
        <Grid item xs={1} sm={1}>
          <div className={classes.divider}></div>
        </Grid>
        <Grid item xs={3} sm={2}>
          <div>
            <Typography className={classes.basicDescription}>
              {`Prep: ${preparationMinutes} min`}
            </Typography>
          </div>
        </Grid>
        <Grid item xs={1} sm={1}>
          <div className={classes.divider}></div>
        </Grid>
        <Grid item xs={3} sm={2}>
          <div>
            <Typography className={classes.basicDescription}>
              {`Cook: ${cookingMinutes} min`}
            </Typography>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}

export default InstructionsHeader;