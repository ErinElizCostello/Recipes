import React, {useState, Fragment} from 'react';
import { Link } from 'react-router-dom';

import clsx from 'clsx';

import { useStylesNavigationBar } from '../styles/navigationBar'
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import SettingsIcon from '@material-ui/icons/Settings';


const SettingsMenu = () => {
  const classes = useStylesNavigationBar();
  const [state, setState] = useState({
    drawer: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <div
      className={clsx(classes.settingsList)}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        <Link
          to={localStorage.getItem('User') ? '/deleteYourAccount' : '/login'}
          style={{ textDecoration: 'none', color: 'inherit' }}
        >
          <ListItem button key={"Delete my account"}>
            <ListItemIcon>{<DeleteForeverIcon />}</ListItemIcon>
            <ListItemText primary="Delete my account" />
          </ListItem>
          </Link>
      </List>
      
    
    </div>
  );

  return (
      <div>
        <div>
          <Fragment key={'right'}>
            <Button onClick={toggleDrawer('right', true)}>
              <SettingsIcon />
            </Button>
            <Drawer anchor={'right'} open={state['right']} onClose={toggleDrawer('right', false)}>

              {list('right')}
            </Drawer>
          </Fragment>
        </div>
      </div>
  );
}

export default SettingsMenu;