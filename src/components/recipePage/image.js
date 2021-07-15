import React from 'react';

import { useStylesImage } from '../styles/recipePage/image'
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';


const Image = (props) => {
  const classes = useStylesImage();

  const image = props.recipeInformation.image
  
  return (
    <div>
      <Card className={classes.image}>
        <CardMedia
          className={classes.image}
          image={image}
          title='recipe'
        />
      </Card>
    </div>
  );
}

export default Image;