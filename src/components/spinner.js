import React from 'react';
import { useStylesSpinner } from './styles/spinner'
import CircularProgress from '@material-ui/core/CircularProgress';

const Spinner = () => {
  const classes = useStylesSpinner()

  const thickness = 4
  const size = 50

  return (
    <CircularProgress
      className={classes.color}
      size={size}
      thickness={thickness}
    />
  );
}

export default Spinner;