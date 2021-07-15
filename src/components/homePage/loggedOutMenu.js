import React from 'react';
import { Link } from 'react-router-dom';

import { useStylesNavigationBar } from '../styles/navigationBar'
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import FaceIcon from '@material-ui/icons/Face';
import PanToolOutlinedIcon from '@material-ui/icons/PanToolOutlined';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';


const LoggedOutMenu = () => {
  const classes = useStylesNavigationBar()

  return (
    <div>
      <List>
        <ListItem >
          <ListItemText primary="Log in or sign up to save your favorite recipes" />
        </ListItem>
        <Divider />
        <Link to="/login" className={classes.links}>
          <ListItem button key={"Log in"}>
            <ListItemIcon>{<FaceIcon />}</ListItemIcon>
            <ListItemText primary="Log in" />
          </ListItem>
        </Link>
        <Link to="/signUp" className={classes.links}>
          <ListItem button key={"Sign up"}>
            <ListItemIcon>{<PanToolOutlinedIcon />}</ListItemIcon>
            <ListItemText primary="Sign up" />
          </ListItem>
        </Link>
      </List>
    </div>
  );
}

export default LoggedOutMenu;