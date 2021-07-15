import React from 'react';
import { useSelector } from 'react-redux'

import { useStylesFavoritesPage } from '../styles/favoritesPage'
import Typography from '@material-ui/core/Typography';
import FaceIcon from '@material-ui/icons/Face';
import logoImage from '../../logo/logoImage.png'


const FavoritesHeader = (props) => {
  const classes = useStylesFavoritesPage()
  const user = JSON.parse(localStorage.getItem('User'))
  const numberOfFavorites = useSelector(state => state.favoritesCodes)

  return (
    <div>
      {
        localStorage.getItem('User') ?
          <div>
            <Typography className={classes.textHeader}>
              {/* <FaceIcon className={classes.icon} /> */}
              {/* <img src={logoImage} style={{ height: 100 }} className={classes.icon} /> */}
              <br />
              {user.payload.user}'s Favorites
            </Typography>
            <div className={classes.spacingUnderHeader}></div>
          </div>
          : null
      }
      {/* {
        props.loading ? null
          : 
          numberOfFavorites.length && numberOfFavorites.length === 1 ?
            <Typography className={classes.numberRecipesSaved}>
              {numberOfFavorites.length} favorite saved
            </Typography>
            : numberOfFavorites.length && numberOfFavorites.length > 1 ?
              <Typography className={classes.numberRecipesSaved}>
                {numberOfFavorites.length} favorites saved
              </Typography>
              : null
      } */}
    </div>
  );
}

export default FavoritesHeader;