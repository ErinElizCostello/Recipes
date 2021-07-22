import React from 'react';
import { Link } from 'react-router-dom';

import { useStylesLoginAndSignUpButtons } from '../styles/homePage/logInAndSignUpButtons'
import Typography from '@material-ui/core/Typography';


const LoggedOutOptions = () => {
  const classes = useStylesLoginAndSignUpButtons()

  return (
    <div className={classes.general}>
      <Link to="/login" className={classes.logInLink}>
        <Typography className={classes.text}>
          Log in
        </Typography>
      </Link>
      <Typography className={classes.slash}>/</Typography>
      <Link to="/signUp" className={classes.signUpLink}>
        <Typography className={classes.text}>
          Sign up
        </Typography>
      </Link>
    </div >
  );
}

export default LoggedOutOptions;