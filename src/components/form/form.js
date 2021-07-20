import React from 'react';

import { useStylesForm } from '../styles/homePage/form'

import GeneralSearch from './generalSearch'
import ShowHideButton from './advancedSearch/showHideButton'
import ChipsArea from '../form/advancedSearch/chipsArea'
import Grid from '@material-ui/core/Grid';
import { Container } from '@material-ui/core';



const Form = () => {
  const classes = useStylesForm()

  return (
    <div>
      {/* <div className={classes.generalSearch}> */}
      <Grid container
        display="flex"
        direction="column"
        justifyContent="center"
        alignItems="center"

      >
        <div>
          <GeneralSearch />
        </div>
        <div className={classes.chipsArea}>
          <ChipsArea />

        </div>
      </Grid>
      {/* <Grid item 
          xs={12}
          > */}
          {/* <Container> */}
      {/* <Grid container
        display="flex"
        direction="row"
        justifyContent="center"
        alignItems="center"

      > */}
        <div className={classes.showHideButton}>
          <ShowHideButton formType="advancedSearch" className={classes.text} />
        </div>
        {/* </Grid> */}
      {/* </Grid>
      </Container> */}
      {/* </div> */}
    </div>
  )
}

export default Form