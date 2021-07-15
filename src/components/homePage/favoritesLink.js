import React from 'react';
import { Link } from 'react-router-dom';

import { authenticateUser } from '../../APIs/database/authenticateUser'

import { useStylesFavoritesAndLogOutButtons } from '../styles/homePage/favoritesAndLogoutButtons'
import Typography from '@material-ui/core/Typography';


const FavoritesLink = () => {
  const classes = useStylesFavoritesAndLogOutButtons()

  const userID = localStorage.getItem('User') ? JSON.parse(localStorage.getItem('User')).payload.user : undefined

  const checkIfUserIsLoggedIn = () => {
    const token = JSON.parse(localStorage.getItem('User')) ? JSON.parse(localStorage.getItem('User')).token : ''

    authenticateUser(token)
  }

  return (
    <>
      <Link
        to={`/favorites/${userID}`}
        className={classes.favoritesButton}
      >
        <Typography
          className={classes.text}
          onClick={() => checkIfUserIsLoggedIn()}
        >
          Favorites
        </Typography>
      </Link>
    </>
  );
}

export default FavoritesLink;