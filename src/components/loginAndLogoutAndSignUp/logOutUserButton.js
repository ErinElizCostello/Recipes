import React from 'react';

import { useStylesFavoritesAndLogOutButtons } from '../styles/homePage/favoritesAndLogoutButtons'
import Typography from '@material-ui/core/Typography';


const LogOutUserButton = () => {
  const classes = useStylesFavoritesAndLogOutButtons()

  const logOutUser = () => {
    localStorage.setItem('loggedOutDialogue', JSON.stringify({ isIt: true }))
    localStorage.removeItem('User')
    window.location.reload()
  }

  return (
    <>
      <Typography
        className={classes.logOutButton}
        onClick={() => logOutUser()}
      >
        Log out
      </Typography>
    </>
  );
}

export default LogOutUserButton;