import React from 'react';

import { useStylesFavoritesPage } from '../styles/favoritesPage/favoritesPage'
import Typography from '@material-ui/core/Typography';


const NoFavsSavedMessage = () => {
  const classes = useStylesFavoritesPage()

  return (
    <div>
      <Typography className={classes.noSavedRecipes}>
        You don't have any saved recipes
      </Typography>
    </div>
  );
}

export default NoFavsSavedMessage;