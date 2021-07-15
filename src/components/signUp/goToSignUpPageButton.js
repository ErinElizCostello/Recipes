import React from 'react';
import { Link } from 'react-router-dom';

import {useStylesGoToSignUpPageButton} from '../styles/gotToSignUpPageButton'
import Button from '@material-ui/core/Button';


const GoToSignUpPageButton = () => {
  const classes = useStylesGoToSignUpPageButton();

  return(
    <div className={classes.root}>
      <Link to="/signUp">
       <Button 
         color="primary"
         >
       Sign Up
     </Button>
     </Link>
    </div>
  )
}

export default GoToSignUpPageButton