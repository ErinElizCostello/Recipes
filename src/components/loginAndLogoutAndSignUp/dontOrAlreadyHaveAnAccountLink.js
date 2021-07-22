import React from 'react';
import { Link } from 'react-router-dom';

import { useStylesLoginPage } from '../styles/loginPage'
import Typography from '@material-ui/core/Typography';


const DontOrAreadyHaveAnAccountLink = (props) => {
  const classes = useStylesLoginPage()

  const account = props.account

  return (
    <div>
      <Link
        to={account === 'dontHaveAnAccount' ? "/signUp" : "/login"}
        className={classes.linkDontHaveAnAccount}
      >
        {
          account === 'dontHaveAnAccount' ?
            <Typography
              className={classes.textDontHaveAnAccount}
              variant='h6'
            >
              Don't have an account? Sign up
            </Typography>
            :
            <Typography
              className={classes.textDontHaveAnAccount}
              variant='h6'
            >
              Already have an account? Log in
            </Typography>
        }
      </Link>
    </div>
  );
}

export default DontOrAreadyHaveAnAccountLink;