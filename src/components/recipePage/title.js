import React from 'react';

import { useStylesTitle } from '../styles/recipePage/title'
import Typography from '@material-ui/core/Typography';


const Title = (props) => {
  const classes = useStylesTitle()

  const title = props.recipeInformation.title
  const credits = props.recipeInformation.creditsText

  return (
    <div className={classes.general}>
      <div >
        <Typography variant='h3' className={classes.title} >
          {title}
        </Typography>
        <br></br>
        <Typography className={classes.credits}>
          {credits}
        </Typography>
      </div>
    </div>
  );
}

export default Title;