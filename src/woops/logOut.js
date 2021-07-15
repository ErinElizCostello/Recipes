import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';


const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

const useStylesPass = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  margin: {
    margin: theme.spacing(1),
  },
  withoutLabel: {
    marginTop: theme.spacing(3),
  },
  textField: {
    width: '25ch',
  },
}));

const LogOut = () => {
  const classes = useStyles();
  
  const logOutUser = () => {
    localStorage.removeItem('User')
  }

  return (  
     <div className={classes.root}>
      <Button 
      onClick={() => logOutUser()}
      color="primary">
        Log out
     </Button>
     </div>
  );
}

export default LogOut


