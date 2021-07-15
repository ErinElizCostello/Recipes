import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';


const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));


const LogOutButton = () => {

  const classes = useStyles()

  const logOutUser = () => {
    localStorage.removeItem('User')
    window.location.reload();
  }

  return (
    <div className={classes.root}>
      <Button
        onClick={() => logOutUser()}
        color="primary">
        Log out
     </Button>
    </div>
  )
}

export default LogOutButton