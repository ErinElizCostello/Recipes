import React from 'react';
import { useStylesSignUpPage } from '../styles/loginAndLogoutAndSignUp/signUpPage'
import Typography from '@material-ui/core/Typography';


const UsernameAlreadyExistsMessage = (props) => {
  const classes = useStylesSignUpPage()

  return (
    <div>
      {
        props.show ?
          <Typography className={classes.textUserAlreadyExists} variant='h6'>
            That username already exists.<br/>Please pick a different one
          </Typography>
          : null
      }
    </div>
  );
}

export default UsernameAlreadyExistsMessage;