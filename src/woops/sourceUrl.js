import React from 'react';
import { Typography } from '@material-ui/core';


const SourceUrl = (props) => {

  const sourceUrl = props.recipeInformation.sourceUrl

  return (
    <div>
      <Typography>
        {sourceUrl}
      </Typography>
    </div>
  );
}

export default SourceUrl;