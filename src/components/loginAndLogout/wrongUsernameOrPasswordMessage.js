import React, { useState } from 'react';
import { useStylesLoginPage } from '../styles/loginPage'
import Typography from '@material-ui/core/Typography';


const WrongUsernameOrPasswordMessage = (props) => {
  const classes = useStylesLoginPage()

  return (
    <div>
      {
        props.show ?
          <Typography className={classes.textWrongUser} variant='h6'>
            Wrong username or password
          </Typography>
          : null
      }

    </div>
  );
}

export default WrongUsernameOrPasswordMessage;