import React from 'react';
import { Link } from 'react-router-dom';

import { authenticateUser } from '../../APIs/database/authenticateUser'

import { useStylesNavigationBar } from '../styles/navigationBar'
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import FaceIcon from '@material-ui/icons/Face';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import PanToolIcon from '@material-ui/icons/PanTool';
import FavoriteIcon from '@material-ui/icons/Favorite';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';


const LoggedInMenu = () => {

  const classes = useStylesNavigationBar()

  const userID = localStorage.getItem('User') ? JSON.parse(localStorage.getItem('User')).payload.user : undefined

  const logOutUser = () => {
    localStorage.setItem('loggedOutDialogue', JSON.stringify({ isIt: true }))
    localStorage.removeItem('User')
    window.location.reload()
  }

  const checkIfUserIsLoggedIn = () => {
    const token = JSON.parse(localStorage.getItem('User')) ? JSON.parse(localStorage.getItem('User')).token : ''

    authenticateUser(token)
  }

  return (
    <div>

      <List style={{height: 1000}}>

        <ListItem >
          <ListItemIcon>{<FaceIcon />}</ListItemIcon>
          <ListItemText primary={`Welcome ${JSON.parse(localStorage.getItem('User')).payload.user}!`} />
        </ListItem>

        <Divider />

        <Link to={`/favorites/${userID}`} className={classes.links}>
          <ListItem button onClick={() => checkIfUserIsLoggedIn()}>
            <ListItemIcon>{<FavoriteIcon />}</ListItemIcon>
            <ListItemText primary="My favorites" />
          </ListItem>
        </Link>

        <ListItem button onClick={() => logOutUser()}>
          <ListItemIcon>{<PanToolIcon />}</ListItemIcon>
          <ListItemText primary="Log out" />
        </ListItem>

        <Divider />

        <Link to='/deleteYourAccount' className={classes.links}>
          <ListItem button key={"Delete my account"}>
            <ListItemIcon>{<DeleteForeverIcon />}</ListItemIcon>
            <ListItemText primary="Delete my account" />
          </ListItem>
        </Link>

      </List>



    </div>
  );
}

export default LoggedInMenu;