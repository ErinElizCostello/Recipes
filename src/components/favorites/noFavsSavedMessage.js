import React from 'react';
import { useSelector } from 'react-redux'

import Spinner from '../spinner'

import { useStylesFavoritesPage } from '../styles/favoritesPage'
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';


const NoFavsSavedMessage = (props) => {
  const classes = useStylesFavoritesPage()
  const favoriteRecipes = useSelector(state => state.userFavorites.data)

  return (
    <div>
      {
        // props.loading ?
        //   <Spinner />
        //   :
          favoriteRecipes.status ?
            <Typography className={classes.noSavedRecipes}>
              You don't have any saved recipes
            </Typography>
            : null
      }
    </div>
  );
}

export default NoFavsSavedMessage;