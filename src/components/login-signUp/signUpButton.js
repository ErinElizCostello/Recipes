import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';


const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

const SignUpButton = () => {
  const classes = useStyles();

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

export default SignUpButton