import React from 'react';

import SettingsMenu from './settingsMenu'
import LoggedOutOptions from './loggedOutOptions';
import LoggedInOptions from './loggedInOptions';
import Title from './title'


import { useStylesHeaderHomePage } from '../styles/homePage/header'
import Grid from '@material-ui/core/Grid';
import SettingsIcon from '@material-ui/icons/Settings';


const Header = () => {
  const classes = useStylesHeaderHomePage()

  return (
    <div>
      <div>
        <Grid
          container
          direction='row'
          justifyContent='center'
        >

          <Grid item sm={6}></Grid>

          <Grid item xs={12} sm={6}>
            <div className={classes.navbar}>
              {
                localStorage.getItem('User') ?
                  <LoggedInOptions />
                  : <LoggedOutOptions />
              }
              <SettingsMenu>
                <SettingsIcon />
              </SettingsMenu>
            </div>
          </Grid>

          <Grid item xs={12} sm={12}>           
            <div className={classes.titleSpacing}>
              <Title />
            </div>
          </Grid>

        </Grid>
      </div>
    </div>
  );
}

export default Header;