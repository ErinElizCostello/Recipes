import React from 'react';

import { useStylesFavoritesAndLogOutButtons } from '../styles/homePage/favoritesAndLogoutButtons'

import LogOutUserButton from './logOutUserButton';
import FavoritesLink from './favoritesLink'


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



// const userID = localStorage.getItem('User') ? JSON.parse(localStorage.getItem('User')).payload.user : undefined

//   const checkIfUserIsLoggedIn = () => {
//     const token = JSON.parse(localStorage.getItem('User')) ? JSON.parse(localStorage.getItem('User')).token : ''

//     authenticateUser(token)
//   }

//   const logOutUser = () => {
//     localStorage.setItem('loggedOutDialogue', JSON.stringify({ isIt: true }))
//     localStorage.removeItem('User')
//     window.location.reload()
//   }