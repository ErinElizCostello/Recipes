import React from 'react';

import {useStylesCardInformation} from '../styles/recipeCard/cardInformation'

import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';


const CardInformation = (props) => {
  const classes = useStylesCardInformation();

  const recipeImage = props.cardInfo.recipe.image
  const recipeTitle = props.cardInfo.recipe.title
  const readyTimeInMinutes = props.cardInfo.recipe.readyInMinutes
  const recipeSummary = props.cardInfo.recipe.summary

  return (
       <CardActionArea>
          <CardMedia
            className={classes.media}
            image={recipeImage}
            title={recipeTitle}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {recipeTitle}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              Ready Time: {readyTimeInMinutes}mn 
              </Typography><br /><br />
              <Typography dangerouslySetInnerHTML={{ __html: recipeSummary.slice(0, 150) + '...' }} />
            
          </CardContent>
        </CardActionArea>
  )
}

export default CardInformation