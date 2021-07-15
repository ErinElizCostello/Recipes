import { Typography } from '@material-ui/core';
import React from 'react';

import {useStylesNoResults} from '../styles/homePage/noResults'

const NoResults = () => {
  const classes = useStylesNoResults()

  return ( 
    <div className={classes.general}>
      <Typography>Your search did not return any results</Typography>
    </div>
   );
}
 
export default NoResults;