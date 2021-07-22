import React from 'react';

import {useStylesNoResults} from '../styles/homePage/noResults'
import Typography from '@material-ui/core/Typography';


const NoResults = () => {
  const classes = useStylesNoResults()

  return ( 
    <div className={classes.general}>
      <Typography>Your search did not return any results</Typography>
    </div>
   );
}
 
export default NoResults;