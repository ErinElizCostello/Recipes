import React from 'react';
import { Link } from 'react-router-dom';
import { useStylesLoginPage } from '../styles/loginPage'
import Typography from '@material-ui/core/Typography';

const DontHaveAnAccountSignUp = () => {
  const classes = useStylesLoginPage()

  return (
    <div>
      <Link to="/signUp" className={classes.linkDontHaveAnAccount}>
        <Typography className={classes.textDontHaveAnAccount} variant='h6'>
          Don't have an account? Sign up
        </Typography>
      </Link>
    </div>
  );
}

export default DontHaveAnAccountSignUp;