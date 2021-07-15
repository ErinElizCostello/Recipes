import React from 'react';
import { Link } from 'react-router-dom';
import { useStylesLoginPage } from '../styles/loginPage'
import Typography from '@material-ui/core/Typography';

const AlreadyHaveAnAccountLogin = () => {
  const classes = useStylesLoginPage()

  return (
    <div>
      <Link to="/login" className={classes.linkDontHaveAnAccount}>
        <Typography className={classes.textDontHaveAnAccount} variant='h6'>
          Already have an account? Log in
        </Typography>
      </Link>
    </div>
  );
}

export default AlreadyHaveAnAccountLogin;