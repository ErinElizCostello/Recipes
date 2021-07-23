import React from 'react';
import { useSelector } from 'react-redux'

import { useStylesFavoritesPage } from '../styles/favoritesPage/favoritesPage'
import Typography from '@material-ui/core/Typography';


const FavoritesHeader = (props) => {
  const classes = useStylesFavoritesPage()
  
  return (
    <div>
      {
        localStorage.getItem('User') ?
          <div>
            <Typography className={classes.textHeader}>
              THE FAVORITES
            </Typography>
            <div className={classes.spacingUnderHeader}></div>
          </div>
          : null
      }
    </div>
  );
}

export default FavoritesHeader;