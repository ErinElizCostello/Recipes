import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import clsx from 'clsx';
import IconButton from '@material-ui/core/IconButton';
import Input from '@material-ui/core/Input';
import FilledInput from '@material-ui/core/FilledInput';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';

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

const LogIn = () => {
  const classes = useStyles();
  const classesPass = useStylesPass()

  const [values, setValues] = useState({
    username: '',
    password: '',
    loginState: ''
  })
  
  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const logInUser = (theUser, thePassword) => {
    fetch('http://localhost:3001/logIn', {
      method: 'POST',
      mode: "cors",
      body: JSON.stringify({
        username: theUser, 
        password: thePassword
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(response => response.json())
      .then(data => {
        data.message ?
         setValues({loginState: data.message})
        :
        setValues({loginState: data[0].username})
      })
  }

  return (
    <div>
      <form noValidate autoComplete="off">
        <div className={classes.root}>
        <TextField
          id="username"
          label="username"
          variant="outlined"
          onChange={e => setValues({username: e.target.value})}
          required
        />
        </div>

        <div className={clsx(classesPass.margin, classesPass.textField)}>
        <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            type={values.showPassword ? 'text' : 'password'}
            value={values.password}
            onChange={handleChange('password')}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {values.showPassword ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            }
            labelWidth={70}
          />     
        </div>
        <Button
          variant="contained"
          color="primary"
          onClick={() => logInUser(values.username, values.password)}
        >
          Login
        </Button>
      </form>
      <h1>{values.loginState}</h1>
    </div>
  );
}

export default LogIn


{/* <TextField
          id="password"
          label="password"
          variant="outlined"
          onChange={e => setPassword({password: e.target.value})}
          required
        /> */}