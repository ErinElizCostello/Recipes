import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';

import { signUp } from '../../APIs/database/signUp'

import UsernameAlreadyExistsMessage from './usernameAreadyExistsMessage'
import DontOrAreadyHaveAnAccountLink from './dontOrAlreadyHaveAnAccountLink'

import clsx from 'clsx';

import { useStylesSignUpPage } from '../styles/loginAndLogoutAndSignUp/signUpPage'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import Typography from '@material-ui/core/Typography';
import BackButton from '../backButton';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import LocalDiningIcon from '@material-ui/icons/LocalDining';
import FormControl from '@material-ui/core/FormControl';


const SignUp = () => {
  const classes = useStylesSignUpPage();

  const [formValues, setFormValues] = useState({ username: '', password: '' })
  const [redirectToLoginPage, setRedirectToLoginPage] = useState(false)
  const [usernameAreadyExists, setUsernameAlreadyExists] = useState(false)

  const handleChangeForm = prop => event => setFormValues({ ...formValues, [prop]: event.target.value });

  const handleClickShowPassword = () => setFormValues({ ...formValues, showPassword: !formValues.showPassword });

  const handleMouseDownPassword = event => event.preventDefault();

  const signUpUser = (username, password) => {
    signUp(username, password)
      .then(response => {
        if (response.status === 401) {
          setUsernameAlreadyExists(true)
        } else {
          setRedirectToLoginPage(true)
        }
      })
  }

  return (
    <div>
      {redirectToLoginPage ? <Redirect to={{ pathname: '/login' }}></Redirect> : null}

      <BackButton backToWhere="home" />

      <div className={classes.general}>
        <Container maxWidth="sm">
          <Grid
            container
            direction="column"
            justifyContent="center"
            alignItems="center"
          >

            <Grid item>
              <UsernameAlreadyExistsMessage show={usernameAreadyExists} />
            </Grid>

            <Grid item>
              <Typography className={classes.textSignUpHeader} variant="h4">
                Sign Up <LocalDiningIcon />
              </Typography>
            </Grid>

            <form noValidate autoComplete="off">
                <Grid item>
                  <div className={classes.formUsername}>
                    <TextField
                      id="username"
                      label="username"
                      variant="outlined"
                      onChange={e => setFormValues({ username: e.target.value })}
                      required
                    />
                  </div>
                  <div className={clsx(classes.formPasswordMargin, classes.formPasswordTextField)}>
                    <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                    <OutlinedInput
                      id="outlined-adornment-password"
                      label="password"
                      type={formValues.showPassword ? 'text' : 'password'}
                      value={formValues.password}
                      onChange={handleChangeForm('password')}
                      endAdornment={
                        <InputAdornment position="end">
                          <IconButton
                            aria-label="toggle password visibility"
                            onClick={handleClickShowPassword}
                            onMouseDown={handleMouseDownPassword}
                            edge="end"
                          >
                            {formValues.showPassword ? <Visibility /> : <VisibilityOff />}
                          </IconButton>
                        </InputAdornment>
                      }
                      labelWidth={70}
                    />
                  </div>
                </Grid>

                <Grid item>
                  <div className={classes.signUpButtonSpacing}>
                    <Button
                      className={classes.signUpButtonDesign}
                      variant="contained"
                      color="primary"
                      onClick={() => signUpUser(formValues.username, formValues.password)}
                    >
                      Sign Up
                    </Button>
                  </div>
                </Grid>
            </form>

              <Grid item>
                <DontOrAreadyHaveAnAccountLink account="alreadyHaveAnAccount" />
              </Grid>

          </Grid>
        </Container>
      </div>
      </div>
      );
}

      export default SignUp