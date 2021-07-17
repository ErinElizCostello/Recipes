import React from 'react';
import { useStylesErrorMessage } from './styles/errorMessage'
import Typography from '@material-ui/core/Typography';

const ErrorMessage = (props) => {
  const classes = useStylesErrorMessage()

  console.log('inside error message', props.error)

  return (
    <div className={classes.spacing}>
      <Typography className={classes.text}>
        Error: {props.error}
      </Typography>
    </div>
  );
}

export default ErrorMessage;