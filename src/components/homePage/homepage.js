import React from 'react';

import Form from '../form/form'
import Dialogue from '../dialogue'
import Header from './header'

import { useStylesHeaderHomePage } from '../styles/homePage/header'
import Grid from '@material-ui/core/Grid';


const HomePage = () => {
  const classes = useStylesHeaderHomePage()

  return (
    <div>
      <Dialogue dialogueType='loggedOut' />

      <div className={classes.background}>

        <Header />

        <Grid container>
          <Grid item md={4}></Grid>
          <Grid item xs={12} md={4}>
            <div>
              <Form />
            </div>
          </Grid>
          <Grid item md={4}></Grid>
        </Grid>

      </div>
    </div>
  )
}

export default HomePage