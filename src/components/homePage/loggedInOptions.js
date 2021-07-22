import React from 'react';

import LogOutUserButton from '../loginAndLogoutAndSignUp/logOutUserButton';
import FavoritesLink from './favoritesLink'

import { useStylesFavoritesAndLogOutButtons } from '../styles/homePage/favoritesAndLogoutButtons'


const LoggedInOptions = () => {
  const classes = useStylesFavoritesAndLogOutButtons()

  return (
    <div className={classes.general}>
      <FavoritesLink />
      <LogOutUserButton />
    </div >
  );
}

export default LoggedInOptions;