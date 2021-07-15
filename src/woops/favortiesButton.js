import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import Alert from '@material-ui/lab/Alert';
import { Switch, Route, Redirect } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      width: '100%',
      margin: theme.spacing(1),
    },
  },
}));


const FavoritesButton = () => {
  const classes = useStyles();

  const [loggedInOrNot, setLoggedInOrNot] = useState(false)

  const checkIfUserIsLoggedIn = () => {

    const token = JSON.parse(localStorage.getItem('User')) ? JSON.parse(localStorage.getItem('User')).token : ''

    fetch(`http://localhost:3001/checkUser`, {
      headers: {
        "Authorization": `bearer ${token}`
      }
    })
      // .then(res => res.json())
      .then(response => {
        if (response.status === 401) {
          localStorage.removeItem('User')          // <Redirect to={{ pathname: '/login' }}></Redirect>
        } 
        // }
        // )
        // }
      })
  }
  // useEffect(() => {
  //   checkIfUserIsLoggedIn()
  // }, []);

  return (
    <div className={classes.root}>

      {/* { loggedInOrNot && loggedInOrNot ?  */}
      <Link to="/favorites">
        <Button onClick={() => checkIfUserIsLoggedIn()} color="primary">
          Favorites
     </Button>
      </Link>
      {/* //   :
    //   <Link to="/login">
    //     <Button color="primary">
    //       Favorites
    //  </Button>
    //   </Link> 
// } */}
    </div>
  )
}

export default FavoritesButton