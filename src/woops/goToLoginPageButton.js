import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';


const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));


const GoToLoginPageButton = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Link to="/login">
        <Button color="primary">
          Log In
        </Button>
      </Link>
    </div>
  )
}

export default GoToLoginPageButton