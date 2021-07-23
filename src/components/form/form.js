import React from 'react';

import GeneralSearch from './generalSearch'
import ShowHideAdvancedSearch from './advancedSearch/showHideAdvancedSearch'
import ChipsArea from '../form/advancedSearch/chipsArea'

import { useStylesForm } from '../styles/form/form'
import Grid from '@material-ui/core/Grid';


const Form = () => {
  const classes = useStylesForm()

  return (
    <div>
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
      <div className={classes.showHideButton}>
        <ShowHideAdvancedSearch className={classes.text} />
      </div>
    </div>
  )
}

export default Form